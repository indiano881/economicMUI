import {  Paper, Stack, Typography } from "@mui/material";



const SingleExchange = ({UsdSek, UsdSekDate, SekUsd, SekUsdDate}:any) => {
    

    return (
        
        <Stack spacing={1} direction="column" sx={{marginTop: "8px"}}>
            <Paper elevation={6}>
                <Typography align="center" variant="h5">USD/SEK: {UsdSek}</Typography>
                <Typography align="center" variant="h6">Last update {UsdSekDate}</Typography>
                </Paper>
            <Paper elevation={6}>
                 <Typography align="center" variant="h5">SEK/USD: {SekUsd}</Typography>
                 <Typography align="center" variant="h6">Last update {SekUsdDate}</Typography>
                 </Paper>
        </Stack>
        
    )
};

export default SingleExchange
