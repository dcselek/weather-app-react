import SelectedCity from '../../context/WeatherContext'

function Weather() {
    const { forecast } = SelectedCity()
    return (
        <>
            <code>{forecast && forecast.city.name}</code>
        </>
    )
}

export default Weather
