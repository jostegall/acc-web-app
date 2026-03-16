import crypto from 'crypto';
import redisClient from '../lib/redisClient.js';

const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

function normalizeText(text) {
    return text.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function buildTtsCacheKey({ text, voiceName, speakingRate, pitch}) {
    const normalizedPayload = {
        text: normalizeText(text),
        voiceName: voiceName || 'default',
        speakingRate: speakingRate ?? 1,
        pitch: pitch ?? 0,
    };

    const payloadString = JSON.stringify(normalizedPayload);
    const hash = crypto.createHash('sha256').update(payloadString).digest('hex');

    return `tts:${hash}`;
}

export async function getCachedSpeech(cacheKey) {
    const cachedValue = await redisClient.get(cacheKey);

    if (!cachedValue) {
        return null;
    }

    return JSON.parse(cachedValue);
}

export async function setCachedSpeech(cacheKey, value, ttlSeconds = DEFAULT_TTL_SECONDS) {
    await redisClient.set(cacheKey, JSON.stringify(value), {
        EX: ttlSeconds,
    })
}