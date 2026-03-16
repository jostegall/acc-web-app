const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export type HealthResponse = {
  status: string;
  message: string;
};

export type TtsRequest = {
  text: string;
  voiceName?: string;
  speakingRate?: number;
  pitch?: number;
};

export type TtsResponse = {
  text: string;
  voiceName: string;
  speakingRate: number;
  pitch: number;
  audioContent: string;
  cached: boolean;
};

export async function fetchHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_BASE_URL}/api/health`);

  if (!response.ok) {
    throw new Error('Failed to fetch backend health status');
  }

  return response.json();
}

export async function requestSpeech(payload: TtsRequest): Promise<TtsResponse> {
  const response = await fetch(`${API_BASE_URL}/api/tts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMessage = 'Failed to generate speech';

    try {
      const errorData = await response.json();
      if (errorData?.error) {
        errorMessage = errorData.error;
      }
    } catch {
      // ignore JSON parse failure and fall back to default message
    }

    throw new Error(errorMessage);
  }

  return response.json();
}