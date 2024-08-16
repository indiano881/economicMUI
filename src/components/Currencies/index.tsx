import  { useEffect, useState } from 'react';
import { Stack, Paper, Typography, TextField, Grid } from '@mui/material';
import { fetchALLCurrency } from '../../utils/functions';

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
        <Stack spacing={2}  sx={{ marginTop: '16px', width:{xs: "270px", sm: "530px", lg: "550px"} }}>
            <TextField
                label="Search Currencies"
                variant="filled"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginBottom: '16px', marginTop:"16px"}}
            />
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Stack spacing={2}>
                        <Typography variant="h5" align="center">
                            USD Rates
                        </Typography>
                        {filteredUsdCurrencies.map(([key, value], index) => (
                            <Paper
                                key={key}
                                elevation={4}
                                sx={{
                                    padding: '8px',
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'transparent', 
                                    width:{xs: "250px", md: "250px"}
                                }}
                            >
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
                        {filteredSekCurrencies.map(([key, value], index) => (
                            <Paper
                                key={key}
                                elevation={4}
                                sx={{
                                    padding: '8px',
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'transparent', 
                                    width:{xs: "250px", md: "250px"}
                                }}
                            >
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
