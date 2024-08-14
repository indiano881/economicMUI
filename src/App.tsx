
import { Box, Button, ButtonGroup, Container, Drawer, Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import RefreshIcon from '@mui/icons-material/Refresh';
import MouseIcon from '@mui/icons-material/Mouse';
import { useState, useEffect } from 'react';
import {  fetchData} from './utils/functions';
import Currencies from './components/Currencies';
import ResponsiveAppBar from './components/Navbar';
import SideDrawer from './components/SideDrawer';

function App() {
  /*const [lastCPI, setLastCPI] = useState<number>();*/
  const [xValues, setXValues] = useState<string[]>([]);
  const [yValues, setYValues] = useState<number[]>([]);
  const [, setXValuesSWE] = useState<string[]>([]);
  const [yValuesSWE, setYValuesSWE] = useState<number[]>([]);

  

  useEffect(() => {
    fetchData("USA", setXValues, setYValues);
    fetchData("SWE", setXValuesSWE, setYValuesSWE);
  }, []);

  const handleRefresh = () => {
    fetchData("USA", setXValues, setYValues);
    fetchData("SWE", setXValuesSWE, setYValuesSWE);
  };
  
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
      <Container maxWidth="lg" sx={{ color: "black", bgcolor: "#6A7C94", height: "100vh", alignItems: "center", display: "flex", flexDirection: "column" }}>
      
        <Box>
          
          <Paper elevation={6} sx={{my: 4, px: 2}}>
            <Typography variant='h5' sx={{ py: 2 }}>Last CPI is </Typography>
            <Button color='primary' variant='contained' endIcon={<RefreshIcon /> } sx={{":hover": {bgcolor: "darkblue"}}} onClick={handleRefresh}>
            REFRESH
          </Button>
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
