import CPICard from "../CPICard";
import USA from "../../../public/usa.jpg"
import Sweden from "../../../public/sweden.jpg"
import { CardContent } from "@mui/material";
import { CPICardContainerProps } from "../../utils/types";

const CPICardContainer = ({USALastCPIDate, USALastCPIDateValue, SWELastCPIDate, SWELastCPIDateValue}:CPICardContainerProps) => {
  
    return (
        <CardContent sx={{display: "flex", flexDirection: {xs: "column", md:"row"}}}>
          <CPICard image={USA} country="the US" CPIDate={USALastCPIDate} CPIValue={USALastCPIDateValue}  />
          <CPICard image={Sweden} country="Sweden" CPIDate={SWELastCPIDate} CPIValue={SWELastCPIDateValue}  />
        </CardContent>
    )
};

export default CPICardContainer

