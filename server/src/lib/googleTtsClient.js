import textToSpeech from '@google-cloud/text-to-speech';

if (process.env.GOOGLE_SERVICE_ACCOUNT_BASE64) {
  const decoded = Buffer.from(
    process.env.GOOGLE_SERVICE_ACCOUNT_BASE64,
    'base64'
  ).toString();

  process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON = decoded;
}

const client = new textToSpeech.TextToSpeechClient({
  credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON
    ? JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)
    : undefined,
});

export default client;