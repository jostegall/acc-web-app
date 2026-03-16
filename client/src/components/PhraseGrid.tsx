import { Box, Grid, Typography } from '@mui/material';
import PhraseButton from './PhraseButton';
import type { Phrase } from '../data/phrases';

type PhraseGridProps = {
  phrases: Phrase[];
  onPhraseSelect: (phrase: string) => void;
};

function PhraseGrid({ phrases, onPhraseSelect }: PhraseGridProps) {
  return (
    <Box component="section" aria-labelledby="common-phrases-heading">
      <Typography
        id="common-phrases-heading"
        variant="h6"
        component="h2"
        sx={{ mb: 2, fontWeight: 700 }}
      >
        Common Phrases
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Tap a phrase to place it into the input field before playback.
      </Typography>

      <Grid container spacing={2}>
        {phrases.map((phrase) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={phrase.id}>
            <PhraseButton
              label={phrase.label}
              onClick={() => onPhraseSelect(phrase.label)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PhraseGrid;