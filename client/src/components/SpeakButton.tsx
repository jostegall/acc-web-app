import { Button, CircularProgress } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

type SpeakButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

function SpeakButton({
  disabled = false,
  loading = false,
  onClick,
}: SpeakButtonProps) {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={!loading ? <VolumeUpIcon /> : undefined}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={loading ? 'Generating speech' : 'Speak current phrase'}
      sx={{
        minHeight: 56,
        minWidth: 160,
        borderRadius: 3,
        fontWeight: 700,
      }}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : 'Speak'}
    </Button>
  );
}

export default SpeakButton;