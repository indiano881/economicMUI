import {  Paper, Stack, Typography } from "@mui/material";



const SingleExchange = ({UsdSek, UsdSekDate, SekUsd, SekUsdDate}:any) => {
    console.log(UsdSek)

    return (
        
        <Stack spacing={1} direction="column" sx={{marginTop: "8px"}}>
            <Paper elevation={6}>
                <Typography align="center" variant="h5">USD/SEK: {UsdSek} last update {UsdSekDate}</Typography>
                <Typography align="center" variant="h6">Last update {UsdSekDate.split(' ').slice(0, -1).join(' ')}</Typography>
                </Paper>
            <Paper elevation={6}>
                 <Typography align="center" variant="h5">SEK/USD: {SekUsd} last update {SekUsdDate}</Typography>
                 <Typography align="center" variant="h6">Last update {SekUsdDate.split(' ').slice(0, -1).join(' ')}</Typography>
                 </Paper>
        </Stack>
        
    )
};

export default SingleExchange
