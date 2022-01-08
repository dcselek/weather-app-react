import { useState, useEffect } from 'react'
import citiesJSON from './cities_of_turkey.json'
import { useFormik } from 'formik'
import SelectedCity from '../../context/WeatherContext'

function Dropdown() {
    const [cities] = useState(citiesJSON)
    const { setCity } = SelectedCity()
    const { values, handleChange } = useFormik({
        initialValues: {
            "city": "Eskişehir",
        }
    })

    useEffect(() => {
        setCity(values.city);
    }, [values.city])
    return (
        <form>
            <select
                onChange={handleChange}
                name="city"
            >
                {cities.map((city) => (
                    <option key={city.id} value={city.name} selected={values.city === city.name}>{city.name}</option>
                ))}
            </select>
        </form>
    )
}

export default Dropdown
