import { Button } from '@mui/material';

type PhraseButtonProps = {
  label: string;
  onClick: () => void;
};

function PhraseButton({ label, onClick }: PhraseButtonProps) {
  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={onClick}
      aria-label={`Select phrase: ${label}`}
      sx={{
        minHeight: 88,
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        py: 2,
        borderRadius: 3,
        fontSize: '1rem',
        fontWeight: 600,
      }}
    >
      {label}
    </Button>
  );
}

export default PhraseButton;