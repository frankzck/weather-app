import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import WeatherCard from './assets/components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather , setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [we, setWe] = useState()

  useEffect(()=>{
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }

      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)

  }, [])

  useEffect(() => {
    if(coords){
      const APIkey = "3326bc7175c7f0a5c69ccff765b0d74e" 
      const url =`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`

      axios.get(url)
      .then(res => {
        setWeather(res.data)
        const obj ={
          celsius: (res.data.main.temp - 273.15).toFixed(1),
          farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
        }
        setTemperature(obj)
        setWe(res.data.weather[0].main)

      })
      .catch(err => err)
      .finally(()=>
      setIsLoading(false))
      
    }
      
      

  }, [coords])



  
 

  return (
    <div className={`App card__${we}`}>
      <div className='card__container'>
      {
      isLoading ?
      <span class="loader"></span>
      :
      <WeatherCard weather={weather} temperature={temperature} we={we}/>


      }
      

      </div>
      
      
    </div>
  )
}

export default App
