import RefreshIcon from '@mui/icons-material/Refresh';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



type MultiActionAreaCardProps= {
  image: string,
  country: string,
  CPIDate: string | number,
  CPIValue:  number
}


export default function MultiActionAreaCard({image, country, CPIDate, CPIValue}: MultiActionAreaCardProps) {

  


  const handleRefresh = () => {
    
  };
  return (
    <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column", alignItems:"center" }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="175px"
          image={image}
          alt={`flag ${country}`}
          sx={{margin: "2px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Last CPI in {country} was {CPIValue} % ({CPIDate})
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