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
  CPIValue: string | number
}


export default function MultiActionAreaCard({image, country, CPIDate, CPIValue}: MultiActionAreaCardProps) {
  const handleRefresh = () => {
    
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="175px"
          image={image}
          alt="green iguana"
          sx={{margin: "8px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CPI in {country} for {CPIDate} was {CPIValue} %
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