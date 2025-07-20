import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import "./infoBox.css"

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1662377824580-a540e7728635?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1493142129976-ae796fd699c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1434118489318-42a0e62c6235?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
    <div className="infoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL :info.temp>15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <div className="cardContainer">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80 ? <ThunderstormIcon/>:info.temp>15 ? <WbSunnyIcon/> :<AcUnitIcon/>}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temprature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Min Temp={info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i>
            
            and feels like 
         {info.feelslike}&deg;C
         </p>
        </Typography>
      </CardContent>
      </div>
    </Card>
    </div>
    
    </div>

    );

}