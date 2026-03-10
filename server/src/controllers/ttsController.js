import { generateSpeech } from '../services/ttsService.js';

export async function postTts(req, res) {
    try {
        const { text, voiceName, speakingRate, pitch } = req.body;

        if (!text || typeof text !== 'string' || !text.trim()) {
            return res.status(400).json({
                error: 'Text is required and must be non-empty string.',
            });
        }

        if (text.trim().length > 200) {
            return res.status(400).json({
                error: 'Text must be 200 characters or fewer.',
            });
        }

        const result = await generateSpeech({
            text: text.trim(),
            voiceName,
            speakingRate,
            pitch,
        });

        return res.status(200).json(result);
    } catch (error) {
        console.error('TTS controller error:', error);

        return res.status(500).json({
            error: 'Failed to generate speech.',
        });
    }
}