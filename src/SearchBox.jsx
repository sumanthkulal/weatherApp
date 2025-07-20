import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("")
    let [err,setErr]=useState(false);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;
    
    let getWeatherInfo=async()=>{
        try{
            let resposne=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await resposne.json();
        console.log(jsonResponse)

        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        return result; 
    }
    catch(err){
        throw err;
    }
               
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value)
    }
    let handleSubmit= async (evt)=>{
        try{
                 evt.preventDefault();
        console.log(city);
        setCity("");
        setErr(false);
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo)
        }
        catch(err){
            setErr(true);
        }
       
    }
    return(
        <div className='searchBox'>
        <form action="" onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" required  value={city} onChange={handleChange}/>
        <br />
        <br></br>
         <Button variant="contained" type="submit">Search</Button>

         {err && <p style={{color:"red"}}>No such place exist! </p>}
        
        </form>
        </div>

    )

}