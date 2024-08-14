import RefreshIcon from '@mui/icons-material/Refresh';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';






export default function MultiActionAreaCard({image, CPIDate, CPIValue}) {
  const handleRefresh = () => {
    
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height=""
          image={image}
          alt="green iguana"
          sx={{margin: "8px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CPI for {CPIDate} was {CPIValue} %
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