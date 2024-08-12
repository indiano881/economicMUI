import Header from './components/Header';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState, useEffect } from 'react';
import {  fetchData} from './utils/functions';

function App() {
  /*const [lastCPI, setLastCPI] = useState<number>();*/
  const [xValues, setXValues] = useState<string[]>([]);
  const [yValues, setYValues] = useState<number[]>([]);
  const [xValuesSWE, setXValuesSWE] = useState<string[]>([]);
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
      <Container maxWidth="lg" sx={{ color: "black", bgcolor: "#ededed", height: "100vh", alignItems: "center", display: "flex", flexDirection: "column" }}>
        <Box>
          <Header />
          <Paper elevation={6} sx={{my: 4, px: 2}}>
            <Typography variant='h5' sx={{ py: 2 }}>Last CPI is </Typography>
          </Paper>
          {xValuesSWE}
          <Button color='primary' variant='contained' endIcon={<RefreshIcon /> } sx={{":hover": {bgcolor: "darkblue"}}} onClick={handleRefresh}>
            REFRESH
          </Button>
        </Box>
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
        <Typography variant='h5'>Values in percentage, reference year is 2010 = 100%</Typography>
        <Button color='primary' variant='contained' endIcon={<RefreshIcon /> } sx={{":hover": {bgcolor: "darkblue"},bgcolor: "blue"}} onClick={handleUSA}>
            USA
          </Button>
          <Button color='primary' variant='contained' endIcon={<RefreshIcon /> } sx={{":hover": {bgcolor: "darkblue"},bgcolor: "green"}} onClick={handleSweden}>
            Sweden
          </Button>
      </Container>
    </>
  );
}

export default App;
