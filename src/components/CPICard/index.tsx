import RefreshIcon from '@mui/icons-material/Refresh';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import USA from "../../../public/usa.jpg"
import { fetchData } from '../../utils/functions';




export default function MultiActionAreaCard() {
  const handleRefresh = () => {
    fetchData("USA", setXValues, setYValues);
    fetchData("SWE", setXValuesSWE, setYValuesSWE);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height=""
          image={USA}
          alt="green iguana"
          sx={{margin: "8px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CPI for year was 139 %
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button color='primary' variant='contained' endIcon={<RefreshIcon /> } sx={{":hover": {bgcolor: "darkblue"}}} onClick={handleRefresh}>
            REFRESH
          </Button>
      </CardActions>
    </Card>
  );
}