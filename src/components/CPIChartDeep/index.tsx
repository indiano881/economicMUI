import { Box, Button, ButtonGroup, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { fetchData } from "../../utils/functions";
import { useEffect, useState } from 'react';

const CPIChartDeep = ({ xValues, setXValues, yValues, setYValues, yValuesSWE, setXValuesSWE, setYValuesSWE }: any) => {
  const [, setThirdCountryX] = useState<string[]>([]);
  const [thirdCountryY, setThirdCountryY] = useState<number[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  
  const [, setFourthCountryX] = useState<string[]>([]);
  const [fourthCountryY, setFourthCountryY] = useState<number[]>([]);
  const [selectedFourthCountry, setSelectedFourthCountry] = useState<string>('');

  useEffect(() => {
    fetchData("USA", setXValues, setYValues, 50);
    fetchData("SWE", setXValuesSWE, setYValuesSWE, 50);
  }, []);

  const handleSweden = () => {
    if (yValuesSWE.length === 0) {
      fetchData("SWE", setXValuesSWE, setYValuesSWE, 50);
    } else {
      setYValuesSWE([]);
    }
  };

  const handleUSA = () => {
    if (yValues.length === 0) {
      fetchData("USA", setXValues, setYValues, 50);
    } else {
      setYValues([]);
    }
  };

  const handleThirdCountry = async (event: any) => {
    const value = event.target.value;
    setSelectedCountry(value);
    
    const response = await fetch(`https://api.worldbank.org/v2/country/${value}/indicator/FP.CPI.TOTL?format=json`);
    const data = await response.json();
    const xAxisData: string[] = [];
    const yAxisData: number[] = [];

    for (let i = 0; i < 50; i++) {
      xAxisData.push(data[1][i].date.toString());
      yAxisData.push(data[1][i].value);
    }

    setThirdCountryX(xAxisData.reverse());
    setThirdCountryY(yAxisData.reverse());
  };

  const handleFourthCountry = async (event: any) => {
    const value = event.target.value;
    setSelectedFourthCountry(value);

    const response = await fetch(`https://api.worldbank.org/v2/country/${value}/indicator/FP.CPI.TOTL?format=json`);
    const data = await response.json();
    const xAxisData: string[] = [];
    const yAxisData: number[] = [];

    for (let i = 0; i < 50; i++) {
      xAxisData.push(data[1][i].date.toString());
      yAxisData.push(data[1][i].value);
    }

    setFourthCountryX(xAxisData.reverse());
    setFourthCountryY(yAxisData.reverse());
  };

  return (
    <>
      <Paper elevation={6} sx={{ height: "500px", width: "100%" }}>
        <Box style={{ height: "500px", width: "100%" }}>
          <LineChart
            xAxis={[{ data: xValues, scaleType: "linear", label: "CPI per year" }]}
            series={[
              {
                data: yValues,
                color: "#900603",
                label: "US"
              },
              {
                data: yValuesSWE,
                color: "green",
                label: "SWE"
              },
              {
                data: thirdCountryY,
                color: "blue",
                label: selectedCountry || "Country"
              },
              {
                data: fourthCountryY,
                color: "purple",
                label: selectedFourthCountry || "Country"
              }
            ]}
          />
        </Box>
      </Paper>
      <Typography variant='h5' color={"white"}>Values in percentage, reference year is 2010 = 100%</Typography>
      <Typography variant='h5' color={"white"}>Period of reference: past 50 years</Typography>
      <ButtonGroup 
      sx={{ 
        paddingBottom: "36px", 
        display:{xs: "flex"},
        flexDirection: {xs: "column", md: "row"} 
        
        }}>
        <Button color='primary' variant='contained' endIcon={<TouchAppIcon />} sx={{ ":hover": { bgcolor: "#680C07" }, bgcolor: "#900603", width: "120px" }} onClick={handleUSA}>
          USA
        </Button>
        <Button color='primary' variant='contained' endIcon={<TouchAppIcon />} sx={{ ":hover": { bgcolor: "darkgreen" }, bgcolor: "green", width: "120px" }} onClick={handleSweden}>
          Sweden
        </Button>
        <FormControl sx={{ width: "120px", bgcolor: "blue", color: "white" }}>
          <InputLabel id="country-select-label" sx={{ color: "white" }}>Europe</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={selectedCountry}
            label="Country"
            onChange={handleThirdCountry}
            sx={{
              color: "white",
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '.MuiSvgIcon-root': {
                color: 'white',
              },
            }}
          >
            <MenuItem value={"FIN"}>Finland</MenuItem>
            <MenuItem value={"DNK"}>Denmark</MenuItem>
            <MenuItem value={"NOR"}>Norway</MenuItem>
            <MenuItem value={"ITA"}>Italy</MenuItem>
            <MenuItem value={""}>None</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "120px", bgcolor: "purple", color: "white" }}>
          <InputLabel id="country-select-label" sx={{ color: "white" }}>World</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={selectedFourthCountry}
            label="Country"
            onChange={handleFourthCountry}
            sx={{
              color: "white",
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '.MuiSvgIcon-root': {
                color: 'white',
              },
            }}
          >
            <MenuItem value={"CHN"}>China</MenuItem>
            <MenuItem value={"JPN"}>Japan</MenuItem>
            <MenuItem value={"AUS"}>Australia</MenuItem>
            <MenuItem value={""}>None</MenuItem>
          </Select>
        </FormControl>
      </ButtonGroup>
    </>
  );
};

export default CPIChartDeep;
