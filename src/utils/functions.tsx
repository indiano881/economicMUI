export const percentageIncreaseCalculator = (val1:number , val2:number) =>  {

    const percentageValue= 100*(val1 - val2)/val2;
    console.log(percentageValue)
    return percentageValue;
}

export const fetchData = async (country: string, setXValues: Function, setYValues: Function, loop:number) => {
    const response = await fetch(`https://api.worldbank.org/v2/country/${country}/indicator/FP.CPI.TOTL?format=json`);
    const data = await response.json();
    const xAxisData = [];
    const yAxisData = [];
    
    for (let i = 0; i < loop; i++) {
      xAxisData.push(data[1][i].date); 
      yAxisData.push(data[1][i].value.toFixed(2)); 
    }

    setXValues(xAxisData.reverse()); 
    setYValues(yAxisData.reverse());
  };

  export const downloandLastCPI = async (country: string, setDate: Function, setValue: Function) => {
    const response = await fetch(`https://api.worldbank.org/v2/country/${country}/indicator/FP.CPI.TOTL?format=json`);
    const data = await response.json();

    setDate(data[1][0].date); 
    setValue(data[1][0].value.toFixed(2));
  };

  export const fetchCurrency = async (country: string, country2: string, setExchange: any, setDate:Function) => {

    const response= await fetch(`https://open.er-api.com/v6/latest/${country2}`);
    const data= await response.json();
    
    setDate(data.time_last_update_utc.split("+0000"))
    setExchange(data.rates[country])
}

export const fetchALLCurrency = async (country: string, setCurrencies: (currencies: { [key: string]: number }) => void) => {
  try {
      const response = await fetch(`https://open.er-api.com/v6/latest/${country}`);
      const data = await response.json();
      setCurrencies(data.rates);
  } catch (error) {
      console.error('Error fetching currency data:', error);
  }
};
export const calculateInvestmentScore=( exchangeRate:number, updateFunction:Function)=> {
 //OBS mock function- i am not an economist!
  const rateValue= (Math.round(exchangeRate * 100 / 15))

  updateFunction((rateValue));
  
}






