import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SelectedCity from '../../context/WeatherContext'

const key = process.env.REACT_APP_WEATHER_API_KEY

function Weather() {
    const { city } = SelectedCity()
    const [forecast, setForecast] = useState();

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
        .then((res) => setForecast(res.data))
        .catch((err) => console.log(err))
        .finally(console.log(forecast))
    }, [city])

    return (
        <>
        </>
    )
}

export default Weather
