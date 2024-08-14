export const percentageIncreaseCalculator = (val1:number , val2:number) =>  {

    const percentageValue= 100*(val1 - val2)/val2;
    console.log(percentageValue)
    return percentageValue;
}

export const fetchData = async (country: string, setXValues: Function, setYValues: Function) => {
    const response = await fetch(`https://api.worldbank.org/v2/country/${country}/indicator/FP.CPI.TOTL?format=json`);
    const data = await response.json();
    const xAxisData = [];
    const yAxisData = [];
    
    for (let i = 0; i < 30; i++) {
      xAxisData.push(data[1][i].date.toString()); 
      yAxisData.push(data[1][i].value); 
    }

    setXValues(xAxisData.reverse()); 
    setYValues(yAxisData.reverse());
  };

  export const downloandLastCPI = async (country: string, setDate: Function, setValue: Function) => {
    const response = await fetch(`https://api.worldbank.org/v2/country/${country}/indicator/FP.CPI.TOTL?format=json`);
    const data = await response.json();

    setDate(data[1][0].date); 
    setValue(data[1][0].value);
  };

  export const fetchCurrency = async (country: string, country2: string, setExchange: any, setDate:Function) => {

    const response= await fetch(`https://open.er-api.com/v6/latest/${country2}`);
    const data= await response.json();
    
    setDate(data.time_last_update_utc)
    setExchange(data.rates[country])
}