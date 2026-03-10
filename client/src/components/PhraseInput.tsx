import { TextField } from '@mui/material';

type PhraseInputProps = {
    value: string,
    onChange: (value: string) => void;
};

function PhraseInput({ value, onChange }: PhraseInputProps) {
    return (
        <TextField
            fullWidth
            label='Enter a phrase'
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder='Type something like "Hello, world!"'
            variant='outlined'
            multiline
            minRows={2}
        />
    );
}

export default PhraseInput;