import { Dispatch, SetStateAction } from 'react';

export type CPIChartProps = {
  xValues: string[]; 
  setXValues: Dispatch<SetStateAction<string[]>>; 
  yValues: number[]; 
  setYValues: Dispatch<SetStateAction<number[]>>; 
  yValuesSWE: number[]; 
  setXValuesSWE: Dispatch<SetStateAction<string[]>>; 
  setYValuesSWE: Dispatch<SetStateAction<number[]>>; 
};

export type CPICardContainerProps= {
    USALastCPIDate: number,
    USALastCPIDateValue: number,
    SWELastCPIDate: number,
    SWELastCPIDateValue: number
  }

  export type CPICardProps= {
    image: string,
    country: string,
    CPIDate:  number,
    CPIValue:  number
  }

  export type SingleExchangeProps= {
    UsdSek: number, 
    UsdSekDate:number,
    SekUsd: number, 
    SekUsdDate:number
}

export type InvestGaugeProps = {
  value: number
}
