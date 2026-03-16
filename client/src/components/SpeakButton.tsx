import { Button, CircularProgress } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

type SpeakButtonProps = {
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}

function SpeakButton({ 
    disabled = false, 
    loading = false,
    onClick 
}: SpeakButtonProps) {
    return (
        <Button 
            variant='contained'
            size='large'
            startIcon={!loading ? <VolumeUpIcon /> : undefined}
            onClick={onClick}
            disabled={disabled || loading}
            sx={{ minHeight: 56 }}
        >
            {loading ? <CircularProgress size={24} color='inherit' /> : 'Speak'}
        </Button>
    );
}

export default SpeakButton;