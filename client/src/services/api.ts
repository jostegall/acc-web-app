const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export type HealthResponse = {
    status: string;
    message: string;
};

export async function fetchHealth(): Promise<HealthResponse> {
    const response = await fetch(`${API_BASE_URL}/api/health`);

    if (!response.ok) {
        throw new Error('Failed to fetch backend health status');
    }

    return response.json();
}