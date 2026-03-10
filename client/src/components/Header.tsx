import { Box, Typography } from '@mui/material';

function Header() {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant='h4' component='h1' gutterBottom>
                AAC Communication App
            </Typography>
            <Typography variant='body1' color='text.secondary'>
                Build phrases quickly and prepare them for speech playback.
            </Typography>
        </Box>
    );
}

export default Header;