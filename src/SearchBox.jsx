import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'
import { useState } from 'react';


export default function SearchBox(){
    let [city,setCity]=useState("")

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="b7f512b9fa0810795be05bb4e0e16d66";
    
    let getWeatherInfo=async()=>{
        console.log("i am here")
        let resposne=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await resposne.json();
        console.log(jsonResponse)

        let result={
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result)
        
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value)
    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    return(
        <div className='searchBox'>
        <h3> Search for waether</h3>
        <form action="" onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" required  value={city} onChange={handleChange}/>
        <br />
        <br></br>
         <Button variant="contained" type="submit">Search</Button>
        
        </form>
        </div>

    )

}