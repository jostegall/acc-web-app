import googleTtsClient from '../lib/googleTtsClient.js';

export async function generateSpeech({ text, voiceName, speakingRate, pitch}) {
    const request = {
        input: { text },
        voice: {
            languageCode: 'en-US',
            ...(voiceName ? { name: voiceName }: {}),
        },
        audioConfig: {
            audioEncoding: 'MP3',
            speakingRate: speakingRate ?? 1,
            pitch: pitch ?? 0,
        },
    };

    const [response] = await googleTtsClient.synthesizeSpeech(request);

    if (!response.audioContent) {
        throw new Error('Google TTS returned no audio content.');
    }

    return {
        text,
        voiceName: voiceName || 'default',
        speakingRate: speakingRate ?? 1,
        pitch: pitch ?? 0,
        audioContent: response.audioContent.toString('base64'),
        cached: false,
    };
}