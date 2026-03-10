import { useEffect, useState } from 'react';
import { Alert, Box, CircularProgress, Container, Paper, Typography } from '@mui/material';
import { fetchHealth, type HealthResponse } from './services/api';

function App () {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function loadHealth() {
      try {
        setLoading(true);
        setError('');

        const data = await fetchHealth();
        setHealth(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unidentifiable Error: something went wrong.');
        }
      } finally {
        setLoading(false);
      }
    }

    loadHealth();
  }, []);

  return (
    <Container maxWidth='md' sx={{ py: 4}}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3}}>
        <Typography variant='h4' component='h1' gutterBottom>
          AAC Communication App
        </Typography>

        <Typography variant='body1' sx={{ mb: 2}}>
          v1.1 Project setup and backend connection test
        </Typography>

        {loading && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircularProgress size={24} />
            <Typography>Checking backend status...</Typography>
          </Box>
        )}

        {error && <Alert severity='error'>{error}</Alert>}

        {health && !loading && (
          <Alert severity='success'>
            Backend connected: {health.message}
          </Alert>
        )}
      </Paper>
    </Container>
  )
}

export default App;