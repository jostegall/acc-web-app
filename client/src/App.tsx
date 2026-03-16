import { useEffect, useRef, useState } from 'react';
import { Alert, Box, Container, Paper, Stack } from '@mui/material';
import Header from './components/Header';
import PhraseInput from './components/PhraseInput';
import SpeakButton from './components/SpeakButton';
import PhraseGrid from './components/PhraseGrid';
import { commonPhrases } from './data/phrases';
import { requestSpeech, type TtsResponse } from './services/api';
import { createAudioUrlFromBase64 } from './utils/audio';

function App() {
  const [currentPhrase, setCurrentPhrase] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const audioUrlRef = useRef<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
    };
  }, []);

  async function handleSpeakClick() {
    const trimmedPhrase = currentPhrase.trim();

    if (!trimmedPhrase) {
      setError('Please enter or select a phrase first.');
      setStatusMessage('');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setStatusMessage('');

      const result: TtsResponse = await requestSpeech({
        text: trimmedPhrase,
      });

      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }

      const audioUrl = createAudioUrlFromBase64(result.audioContent);
      audioUrlRef.current = audioUrl;

      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      await audio.play();

      setStatusMessage(
        result.cached
          ? 'Speech played successfully (served from cache).'
          : 'Speech played successfully.'
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong while generating speech.');
      }
    } finally {
      setLoading(false);
    }
  }

  function handlePhraseSelect(phrase: string) {
    setCurrentPhrase(phrase);
    setError('');
    setStatusMessage('');
  }

  function handlePhraseChange(value: string) {
    setCurrentPhrase(value);
    setError('');
    setStatusMessage('');
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Header />

        <Stack spacing={3}>
          <PhraseInput value={currentPhrase} onChange={handlePhraseChange} />

          <Box>
            <SpeakButton
              onClick={handleSpeakClick}
              disabled={!currentPhrase.trim()}
              loading={loading}
            />
          </Box>

          {error && <Alert severity="error">{error}</Alert>}

          {statusMessage && <Alert severity="success">{statusMessage}</Alert>}

          <PhraseGrid
            phrases={commonPhrases}
            onPhraseSelect={handlePhraseSelect}
          />
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;