import { Box, Chip, Stack, Typography } from '@mui/material';

function Header() {
  return (
    <Box component="header" sx={{ mb: 4 }}>
      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
        <Chip label="AAC Web App" color="primary" variant="outlined" />
        <Chip label="React + TypeScript" variant="outlined" />
      </Stack>

      <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
        AAC Communication App
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
        Type a custom phrase or select a common phrase button, then play generated
        speech with fast repeat playback supported by server-side caching.
      </Typography>
    </Box>
  );
}

export default Header;