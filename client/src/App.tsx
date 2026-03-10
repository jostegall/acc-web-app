import {useState} from 'react';
import { Alert, Box, Container, Paper, Stack } from '@mui/material';
import Header from './components/Header';
import PhraseInput from './components/PhraseInput';
import SpeakButton from './components/SpeakButton';
import PhraseGrid from './components/PhraseGrid';
import { commonPhrases } from './data/phrases';

function App() {
  const [currentPhrase, setCurrentPhrase] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleSpeakClick() {
    if (!currentPhrase.trim()) {
      setMessage('Please enter or select a phrase first.');
      return;
    }
    setMessage(`Ready to speak: "${currentPhrase}`);
  }

  function handlePhraseSelect(phrase: string) {
    setCurrentPhrase(phrase);
    setMessage('');
  }

  function handlePhraseChange(value: string) {
    setCurrentPhrase(value);
    setMessage('');
  }

  return (
    <Container maxWidth='md' sx={{ px: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3}}>
        <Header />

        <Stack spacing={3}>
          <PhraseInput value={currentPhrase} onChange={handlePhraseChange} />

          <Box>
            <SpeakButton 
              onClick={handleSpeakClick}
              disabled={!currentPhrase.trim()}
            />
          </Box>

          {message && <Alert severity='info'>{message}</Alert>}

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