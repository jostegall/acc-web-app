import { Button } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

type SpeakButtonProps = {
    disabled?: boolean;
    onClick: () => void;
}

function SpeakButton({ disabled = false, onClick }: SpeakButtonProps) {
    return (
        <Button 
            variant='contained'
            size='large'
            startIcon={<VolumeUpIcon />}
            onClick={onClick}
            disabled={disabled}
            sx={{ minHeight: 56 }}
        >
            Speak
        </Button>
    );
}

export default SpeakButton;