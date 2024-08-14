import { Divider, Paper, Stack, Typography } from "@mui/material";



const SingleExchange = ({UsdSek, UsdSekDate, SekUsd, SekUsdDate}:any) => {
    console.log(UsdSek)

    return (
        
        <Stack spacing={2} direction="column" divider={<Divider orientation="vertical" flexItem />}>
            <Paper elevation={6}><Typography>USD/SEK: {UsdSek} last update {UsdSekDate}</Typography></Paper>
            <Paper elevation={6}> <Typography>SEK/USD: {SekUsd} last update {SekUsdDate}</Typography></Paper>
        </Stack>
        
    )
};

export default SingleExchange
