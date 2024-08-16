
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { InvestGaugeProps } from '../../utils/types';


const getColor=(value: number)=> {
    if (value <= 33) return 'red';
    if (value <= 66) return 'yellow';
    return 'green';
}


const InvestGauge=({ value }:InvestGaugeProps)=> {
    return (<>
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} paddingBottom={"8px"}>
        <Box display={"flex"} flexDirection={"column"}>
            <Typography variant='h5'>How good is to invest </Typography>
            <Typography variant='h5'>US Dollars in Sweden</Typography>
            <Typography variant='h5'>right now?</Typography>
        </Box>
        <Box position="relative" display="inline-flex" bgcolor={"#3A6C9C"} borderRadius={"4px"}>
            
        <CircularProgress
        variant="determinate"
        value={100}
        size={150}
        thickness={5}
        sx={{
          color: 'white',
          padding: "8px"
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
          padding: "8px"
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
                    variant="h5"
                    component="div"
                    color="white"
                >{`${value} / 100`}</Typography>
            </Box>
        </Box>
        </Box>
        </>
    );
}

export default InvestGauge;

