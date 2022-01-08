import React, { useState } from 'react'

const WeatherContext = React.createContext()

function SelectedCity() {
    const [city, setCity] = useState("")
    return {
        city,
        setCity
    }
}

export function WeatherProvider({children}){
    const value = SelectedCity()

    return(
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )
}

export default function WeatherConsumer() {
    return React.useContext(WeatherContext);
}