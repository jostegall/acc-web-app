import { Button } from '@mui/material';

type PhraseButtonProps = {
    label: string;
    onClick: () => void;
};

function PhraseButton({ label, onClick }: PhraseButtonProps) {
    return(
        <Button
            variant='outlined'
            fullWidth
            onClick={onClick}
            sx={{
                minHeight: 72,
                justifyContent: 'Center',
                textAlign: 'center',
                px: 2,
            }}
        >
            {label}
        </Button>
    );
}

export default PhraseButton;