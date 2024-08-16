
import { Box, Container, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import {  calculateInvestmentScore, downloandLastCPI, fetchCurrency, fetchData} from './utils/functions';
import Currencies from './components/Currencies';
import SideDrawer from './components/SideDrawer';
import { CPICardContainerProps } from './utils/types';
import CPICardContainer from './components/CPICardContainer';
import SingleExchange from './components/SingleExchange';
import CPIChart from './components/CPIChart';
import CPIChartDeep from './components/CPIChartDeep';
import InvestGauge from './components/InvestGauge';


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
  const [valueGauge,setValueGauge] = useState<number >(0);

  useEffect(() => {
    fetchData("USA", setXValues, setYValues, 25);
    fetchData("SWE", setXValuesSWE, setYValuesSWE, 25);
    downloandLastCPI("USA", setUSALastCPIDate, setUSALastCPIValue);
    downloandLastCPI("SWE", setSWELastCPIDate, setSWELastCPIValue);
    fetchCurrency("SEK", "USD", setUsdSek, setUsdSekDate);
    fetchCurrency("USD", "SEK",setSekUsd, SekUsdSekDate);
    
  }, []);

  useEffect(() => {
    if (UsdSek) {
      calculateInvestmentScore(UsdSek, setValueGauge)
    }
}, [UsdSek]);
  
  
  
  return (
    <>
    
    <SideDrawer setPage={setPage} page={page}/>
      <Container 
      maxWidth="lg"  
      sx={{ 
        color: "black", 
        bgcolor: "#3A6C9C", 
        alignItems: "center", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: {
          xs: 8, 
          sm: 20,
        } 
        }}>
        <Box>
        {(page==="Home" ) && <> 
          <SingleExchange UsdSek={UsdSek} UsdSekDate={UsdSekDate} SekUsd={SekUsd} SekUsdDate={SekUsdDate}/>
        </>}
        
          <Paper elevation={6} sx={{my: 4, px: 2}}>
            {(page==="Home") && <>

              <CPICardContainer USALastCPIDate={USALastCPIDate} USALastCPIDateValue={USALastCPIDateValue} SWELastCPIDate={SWELastCPIDate} SWELastCPIDateValue={SWELastCPIDateValue} />
              <InvestGauge value={valueGauge} />
            </>}
            
            
            
          </Paper>
          
          
        </Box>
        
        {(page==="Home" ) && <>
         <CPIChart 
          xValues={xValues} 
          setXValues={setXValues} 
          yValues={yValues} 
          setYValues={setYValues} 
          yValuesSWE={yValuesSWE} 
          setXValuesSWE={setXValuesSWE} 
          setYValuesSWE={setYValuesSWE}/>

</>}
{(page==="Inflation" ) && <>
         <CPIChartDeep
          xValues={xValues} 
          setXValues={setXValues} 
          yValues={yValues} 
          setYValues={setYValues} 
          yValuesSWE={yValuesSWE} 
          setXValuesSWE={setXValuesSWE} 
          setYValuesSWE={setYValuesSWE}/>

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
