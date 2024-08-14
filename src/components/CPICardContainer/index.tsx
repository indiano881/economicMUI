import CPICard from "../CPICard";
import USA from "../../../public/usa.jpg"
import Sweden from "../../../public/sweden.jpg"
const CPICardContainer = ({USALastCPIDate, USALastCPIDateValue, SWELastCPIDate, SWELastCPIDateValue}) => {
  
    return (
        <div>
          <CPICard image={USA} CPIDate={USALastCPIDate} CPIValue={USALastCPIDateValue}  />
          <CPICard image={Sweden} CPIDate={SWELastCPIDate} CPIValue={SWELastCPIDateValue}  />
        </div>
    )
};

export default CPICardContainer

