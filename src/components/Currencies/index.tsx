import  { useEffect, useState } from 'react';
import { Stack, Paper, Typography, TextField, Grid } from '@mui/material';

const fetchALLCurrency = async (country: string, setCurrencies: (currencies: { [key: string]: number }) => void) => {
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${country}`);
        const data = await response.json();
        setCurrencies(data.rates);
    } catch (error) {
        console.error('Error fetching currency data:', error);
    }
};

const Currencies = () => {
    const [usdCurrencies, setUsdCurrencies] = useState<{ [key: string]: number }>({});
    const [sekCurrencies, setSekCurrencies] = useState<{ [key: string]: number }>({});
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        fetchALLCurrency('USD', setUsdCurrencies);
        fetchALLCurrency('SEK', setSekCurrencies);
    }, []);

    const filteredUsdCurrencies = Object.entries(usdCurrencies).filter(([key]) =>
        key.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const filteredSekCurrencies = Object.entries(sekCurrencies).filter(([key]) =>
        key.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <Stack spacing={2} sx={{ marginTop: '16px' }}>
            <TextField
                label="Search Currencies"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginBottom: '16px' }}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Stack spacing={2}>
                        <Typography variant="h5" align="center">
                            USD Rates
                        </Typography>
                        {filteredUsdCurrencies.map(([key, value]) => (
                            <Paper key={key} elevation={3} sx={{ padding: '8px' }}>
                                <Typography align="center" variant="h6">
                                    {key}: {value}
                                </Typography>
                            </Paper>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack spacing={2}>
                        <Typography variant="h5" align="center">
                            SEK Rates
                        </Typography>
                        {filteredSekCurrencies.map(([key, value]) => (
                            <Paper key={key} elevation={3} sx={{ padding: '8px' }}>
                                <Typography align="center" variant="h6">
                                    {key}: {value}
                                </Typography>
                            </Paper>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Currencies;
