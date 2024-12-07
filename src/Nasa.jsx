import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Nasa = () => {
    const [weather, setWeather] = useState([]);
    useEffect(() => {
        axios.get("https://all-the-weather.herokuapp.com/cities")
        .then((res) => {
            setWeather(res.data.items)
        })
    }, []);
  return (
    <>
    { weather.map((ad) => {
        return (
          
            <div className="weatherApp"  key={ad.id}><h1 class="hd" >API View</h1> <hr/>
              
                <h1>{ad.countryCode} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                <h1>{ad.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                <h1>{ad.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                <h1>{ad.regionCode}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                <hr />
            </div>
            )
      })
    }
    </>
  );
};
export default Nasa
