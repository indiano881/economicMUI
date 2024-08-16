
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const getColor=(value: number)=> {
    if (value <= 33) return 'red';
    if (value <= 66) return 'yellow';
    return 'green';
}


type InvestGaugeProps = {
    value: number
}

const InvestGauge=({ value }:InvestGaugeProps)=> {
    return (<>
    <Box display={"flex"}>
        <Box display={"flex"} flexDirection={"column"}>
            <Typography variant='h5'>How good is to invest Dollars</Typography>
            <Typography variant='h5'>in Sweden right now?</Typography>
        </Box>
        <Box position="relative" display="inline-flex" bgcolor={"#3A6C9C"} borderRadius={"4px"}>
            
        <CircularProgress
        variant="determinate"
        value={100}
        size={150}
        thickness={5}
        sx={{
          color: 'lightgray', 
        }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={150}
        thickness={5}
        sx={{
          color: getColor(value),
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography
                    variant="h6"
                    component="div"
                    color="textPrimary"
                >{`${value} / 100`}</Typography>
            </Box>
        </Box>
        </Box>
        </>
    );
}

export default InvestGauge;

