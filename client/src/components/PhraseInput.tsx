import { TextField } from '@mui/material';
import type { KeyboardEvent } from 'react';

type PhraseInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
};

function PhraseInput({ value, onChange, onSubmit }: PhraseInputProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.ctrlKey && event.key === 'Enter') {
      event.preventDefault();
      onSubmit?.();
    }
  }

  return (
    <TextField
      fullWidth
      label="Phrase to speak"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Type something like 'Hello, world!'"
      variant="outlined"
      multiline
      minRows={3}
      inputProps={{
        'aria-label': 'Phrase to speak',
        maxLength: 200,
      }}
      helperText={`${value.length}/200 characters • Press Ctrl+Enter to speak`}
    />
  );
}

export default PhraseInput;