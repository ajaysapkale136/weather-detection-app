import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({info}){

    const INIT_URL = "https://images.unsplash.com/photo-1639147830970-b52cd6c85c53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG92ZXJjYXN0JTIwY2xvdWRzfGVufDB8fDB8fHww";

    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1631315124498-41ebb8b10ede?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D";

    return(
        <div className="infoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 60 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}{info.humidity > 60 ? <ThunderstormIcon/> : info.temp > 15 ? < SunnyIcon /> : < AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}%</p>
                    <p>Min Temperature = {info.tempMin}&deg;C</p>
                    <p>Max Temperature = {info.tempMax}&deg;C</p>
                    <p>The Weather can be Described as <i>{info.weather}</i> Feels Like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
                </div>
        </div>
    )
}