import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";


export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] =useState({
        city: "Delhi",
        feelsLike: 40.16,
        humidity: 70,
        temp: 33.16,
        tempMax: 33.16,
        tempMin: 33.16,
        weather: "overcast clouds",
    });

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    };

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Vaibhav_Patil</h2>
            < SearchBox updateInfo={updateInfo}/>
            < InfoBox info={weatherInfo} />
        </div>
    )
}