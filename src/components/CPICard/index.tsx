import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { CPICardProps } from '../../utils/types';



const CPICard=({image, country, CPIDate, CPIValue}: CPICardProps) =>{

  return (
    <Card sx={{ 
      alignItems:"center",
      display: "flex", 
      flexDirection: "column", 
      maxWidth: 345, 
      }}
      >
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
      
      </CardActions>
    </Card>
  );
}

export default CPICard;