import CPICard from "../CPICard";
import USA from "../../../public/usa.jpg"
import Sweden from "../../../public/sweden.jpg"
import { CardContent } from "@mui/material";


type CPICardContainerProps= {
  USALastCPIDate: string | number,
  USALastCPIDateValue: string | number,
  SWELastCPIDate: string | number,
  SWELastCPIDateValue: string | number,
}

const CPICardContainer = ({USALastCPIDate, USALastCPIDateValue, SWELastCPIDate, SWELastCPIDateValue}:CPICardContainerProps) => {
  
    return (
        <CardContent sx={{display: "flex", flexDirection: {xs: "column", md:"row"}}}>
          <CPICard image={USA} country="the US" CPIDate={USALastCPIDate} CPIValue={USALastCPIDateValue}  />
          <CPICard image={Sweden} country="US" CPIDate={SWELastCPIDate} CPIValue={SWELastCPIDateValue}  />
        </CardContent>
    )
};

export default CPICardContainer

