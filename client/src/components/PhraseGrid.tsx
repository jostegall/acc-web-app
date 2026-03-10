import { Grid, Typography } from '@mui/material';
import PhraseButton from './PhraseButton';
import type { Phrase } from '../data/phrases';

type PhraseGridProps = {
    phrases: Phrase[];
    onPhraseSelect: (phrase: string) => void;
};

function PhraseGrid({ phrases, onPhraseSelect }: PhraseGridProps) {
    return (
        <>
            <Typography variant='h6' component='h2' sx={{ mb: 2}}>
                Common Phrase
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
        </>
    );
}

export default PhraseGrid;