
import { Box, Button, ButtonGroup, Container, Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

import MouseIcon from '@mui/icons-material/Mouse';
import { useState, useEffect } from 'react';
import {  downloandLastCPI, fetchData} from './utils/functions';
import Currencies from './components/Currencies';
import SideDrawer from './components/SideDrawer';
import { CPICardContainerProps } from './utils/types';
import CPICardContainer from './components/CPICardContainer';


function App() {
  /*const [lastCPI, setLastCPI] = useState<number>();*/
  const [xValues, setXValues] = useState<string[]>([]);
  const [yValues, setYValues] = useState<number[]>([]);
  const [, setXValuesSWE] = useState<string[]>([]);
  const [yValuesSWE, setYValuesSWE] = useState<number[]>([]);
  const [USALastCPIDate, setUSALastCPIDate] = useState<CPICardContainerProps>();
  const [USALastCPIDateValue, setUSALastCPIValue] = useState<CPICardContainerProps>();
  const [SWELastCPIDate, setSWELastCPIDate] = useState<CPICardContainerProps>();
  const [SWELastCPIDateValue, setSWELastCPIValue] = useState<CPICardContainerProps>();
  

  useEffect(() => {
    fetchData("USA", setXValues, setYValues);
    fetchData("SWE", setXValuesSWE, setYValuesSWE);
    downloandLastCPI("USA", setUSALastCPIDate, setUSALastCPIValue);
    downloandLastCPI("SWE", setSWELastCPIDate, setSWELastCPIValue);
  }, []);

  
  
  const handleSweden = () => {
    if(yValuesSWE.length===0) {
      fetchData("SWE", setXValuesSWE, setYValuesSWE);
    } else {
      setYValuesSWE([])
    }
    
  };

  const handleUSA = () => {
    if(yValues.length===0) {
    fetchData("USA", setXValues, setYValues);
    } else {
      setYValues([])
    }
  };
  return (
    <>
    {/*<ResponsiveAppBar />*/}
    <SideDrawer />
      <Container maxWidth="md"  sx={{ color: "black", bgcolor: "#3A6C9C", height: "100vh", alignItems: "center", display: "flex", flexDirection: "column" }}>
      
        <Box>
          
          <Paper elevation={6} sx={{my: 4, px: 2}}>
            <CPICardContainer USALastCPIDate={USALastCPIDate} USALastCPIDateValue={USALastCPIDateValue} SWELastCPIDate={SWELastCPIDate} SWELastCPIDateValue={SWELastCPIDateValue} />
            
            
          </Paper>
          
          
        </Box>
        <Paper elevation={6} sx={{ height: "300px", width: "100%" }}>
        <Box style={{ height: "300px", width: "100%" }}>
          
        <LineChart 
          xAxis={[{ data: xValues, scaleType: "linear", label: "CPI per year" }]} 
          
          series={[
            {
              data: yValues,
              color: "blue",
              label:"US"
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
        <Typography variant='h5'>Values in percentage, reference year is 2010 = 100%</Typography>
        <ButtonGroup>
        <Button color='primary' variant='contained' endIcon={<MouseIcon /> } sx={{":hover": {bgcolor: "darkblue"},bgcolor: "blue", width: "120px"}} onClick={handleUSA}>
            USA
          </Button>
          <Button color='primary' variant='contained' endIcon={<MouseIcon/> }  sx={{":hover": {bgcolor: "darkblue"},bgcolor: "green", width: "120px"}} onClick={handleSweden}>
            Sweden
          </Button>
          </ButtonGroup>
          <Box><Paper elevation={6}><Currencies/></Paper></Box>
      </Container>
    </>
  );
}

export default App;
