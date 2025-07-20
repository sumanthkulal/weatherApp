import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"bengaluru",
        feelslike:26.29,
        humidity:79,
        temp:26.29,
        tempMax:26.29,
        tempMin:26.29,
        weather:"overcast clouds"
    })

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
        return(
            <>
                <h1> Weather App</h1>
                 <SearchBox updateInfo={updateInfo}/>
                 <br></br>
                <InfoBox info={weatherInfo}/>
            </>
        )

}
        
