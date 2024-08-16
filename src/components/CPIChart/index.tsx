import { Box, Button, ButtonGroup, Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import MouseIcon from '@mui/icons-material/Mouse';
import { fetchData} from "../../utils/functions";
import { CPIChartProps } from '../../utils/types';

const CPIChart = ({xValues, setXValues, yValues, setYValues, yValuesSWE,setXValuesSWE, setYValuesSWE}:CPIChartProps) => {

    const handleSweden = () => {
        if(yValuesSWE.length===0) {
          fetchData("SWE", setXValuesSWE, setYValuesSWE, 25);
        } else {
          setYValuesSWE([])
        }
        
      }; 
    
      const handleUSA = () => {
        if(yValues.length===0) {
        fetchData("USA", setXValues, setYValues, 25);
        } else {
          setYValues([])
        }
      };

    return (
        <>
        <Paper elevation={6} sx={{ height: "300px", width: "100%" }}>
          <Box style={{ height: "300px", width: "100%" }}>
          
          <LineChart 
            xAxis={[{ data: xValues, scaleType: "linear", label: "CPI per year" }]} 
            
            series={[
              {
                data: yValues,
                color: "#900603",
                label:"US",
                
              },
              {
                data: yValuesSWE,
                color: "green",
                label:"SWE"
              }
            ]}
            
          />
          
          </Box>
        </Paper>
          <Typography variant='h5' color={"white"}>Values in percentage, reference year is 2010 = 100%</Typography>
          <Typography variant='h5' color={"white"}>Period of reference: past 25 years</Typography>
          <ButtonGroup sx={{paddingBottom: "36px"}}>
            <Button color='primary' variant='contained' endIcon={<MouseIcon /> } sx={{":hover": {bgcolor: "#680C07"},bgcolor: "#900603", width: "120px"}} onClick={handleUSA}>
              USA
            </Button>
            <Button color='primary' variant='contained' endIcon={<MouseIcon/> }  sx={{":hover": {bgcolor: "darkgreen"},bgcolor: "green", width: "120px"}} onClick={handleSweden}>
              Sweden
            </Button>
          </ButtonGroup >
        </>
    )
};

export default CPIChart
