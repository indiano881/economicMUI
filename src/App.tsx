
import { Box, Button, ButtonGroup, Container, Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

import MouseIcon from '@mui/icons-material/Mouse';
import { useState, useEffect } from 'react';
import {  downloandLastCPI, fetchCurrency, fetchData} from './utils/functions';
import Currencies from './components/Currencies';
import SideDrawer from './components/SideDrawer';
import { CPICardContainerProps } from './utils/types';
import CPICardContainer from './components/CPICardContainer';
import SingleExchange from './components/SingleExchange';


function App() {
  const [page, setPage] =useState("Home");
  const [xValues, setXValues] = useState<string[]>([]);
  const [yValues, setYValues] = useState<number[]>([]);
  const [, setXValuesSWE] = useState<string[]>([]);
  const [yValuesSWE, setYValuesSWE] = useState<number[]>([]);
  const [USALastCPIDate, setUSALastCPIDate] = useState<CPICardContainerProps>();
  const [USALastCPIDateValue, setUSALastCPIValue] = useState<CPICardContainerProps>();
  const [SWELastCPIDate, setSWELastCPIDate] = useState<CPICardContainerProps>();
  const [SWELastCPIDateValue, setSWELastCPIValue] = useState<CPICardContainerProps>();
  const [UsdSek, setUsdSek] = useState<any>();
  const [UsdSekDate, setUsdSekDate] = useState<any>();
  const [SekUsd, setSekUsd] = useState<any>();
  const [SekUsdDate, SekUsdSekDate] = useState<any>();

  useEffect(() => {
    fetchData("USA", setXValues, setYValues);
    fetchData("SWE", setXValuesSWE, setYValuesSWE);
    downloandLastCPI("USA", setUSALastCPIDate, setUSALastCPIValue);
    downloandLastCPI("SWE", setSWELastCPIDate, setSWELastCPIValue);
    fetchCurrency("SEK", "USD", setUsdSek, setUsdSekDate);
    fetchCurrency("USD", "SEK",setSekUsd, SekUsdSekDate);
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

  console.log("page "+page)
  return (
    <>
    
    <SideDrawer setPage={setPage}/>
      <Container maxWidth="lg"  sx={{ color: "black", bgcolor: "#3A6C9C", height: "100vh", alignItems: "center", display: "flex", flexDirection: "column" }}>
        <Box>
        {(page==="Home" || page==="Currencies") && <> 
          <SingleExchange UsdSek={UsdSek} UsdSekDate={UsdSekDate} SekUsd={SekUsd} SekUsdDate={SekUsdDate}/>
        </>}
        
          <Paper elevation={6} sx={{my: 4, px: 2}}>
            {(page==="Home" || page==="Inflation") && <>

              <CPICardContainer USALastCPIDate={USALastCPIDate} USALastCPIDateValue={USALastCPIDateValue} SWELastCPIDate={SWELastCPIDate} SWELastCPIDateValue={SWELastCPIDateValue} />

            </>}
            
            
            
          </Paper>
          
          
        </Box>
        
        {(page==="Home" || page==="Inflation") && <>
          <Paper elevation={6} sx={{ height: "300px", width: "100%" }}>
          <Box style={{ height: "300px", width: "100%" }}>
          
          <LineChart 
            xAxis={[{ data: xValues, scaleType: "linear", label: "CPI per year" }]} 
            
            series={[
              {
                data: yValues,
                color: "#900603",
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
          <Typography variant='h5' color={"white"}>Values in percentage, reference year is 2010 = 100%</Typography>
          <ButtonGroup>
          <Button color='primary' variant='contained' endIcon={<MouseIcon /> } sx={{":hover": {bgcolor: "#680C07"},bgcolor: "#900603", width: "120px"}} onClick={handleUSA}>
              USA
            </Button>
            <Button color='primary' variant='contained' endIcon={<MouseIcon/> }  sx={{":hover": {bgcolor: "darkgreen"},bgcolor: "green", width: "120px"}} onClick={handleSweden}>
              Sweden
            </Button>
            </ButtonGroup>

</>}

       
          {page=="Currencies" && <>
            <Box>
              <Paper elevation={6}>
                <Currencies/>
              </Paper>
            </Box>
          
          </>}
          
      </Container>
    </>
  );
}

export default App;
