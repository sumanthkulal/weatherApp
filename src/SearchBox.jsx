import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'
import { useState } from 'react';


export default function SearchBox(){
    let [city,setCity]=useState("")

    let handleChange=(evt)=>{
        setCity(evt.target.value)
    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
    }
    return(
        <div class='searchBox'>
        <h3> Search for waether</h3>
        <form action="">
    <TextField id="city" label="City Name" variant="outlined" required  value={city} onChange={handleChange}/>
        <br />
        <br></br>
         <Button variant="contained" type="submit">Search</Button>
        
        </form>
        </div>

    )

}