import React, {useEffect, useState} from "react";
import {getFirstValue, getWeatherValue} from "../../redux/reducers/weatherReducer";
import {useDispatch, useSelector} from "react-redux";
import './OneDayForecast.css'
import WeatherAnimation from "./WeatherAnimation/WeatherAnimation";
import {NavLink} from "react-router-dom";

const OneDayForecast = () => {
    const [query, setQuery] = useState('')

    const dispatch = useDispatch()

    const state = useSelector(({weatherData}) => {
        return {
            data: weatherData.data,
        }

    })
    const items = state.data
    const weather = state.data.current.weather_descriptions[0]


    console.log(weather)

    useEffect(() => {
        dispatch(getFirstValue())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getWeatherValue(query))
    }

    return (
        <main>
            <div className='search-box'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className='search-bar'
                        placeholder='Search...'
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <input type="submit" value="Submit" className='buttonInput'/>
                </form>
            </div>
            <div>
                <NavLink to='/forecastTenDays'>Узнать прогноз погоды на ближайшие 10 дней</NavLink>
            </div>
            {(typeof state.data != 'undefined') ? (
                <div>
                    <div className='location-box'>
                        <div className='location'>
                            <p>{items.location.country} / {items.location.name}</p>
                        </div>
                        <div className='date'>
                            {items.location.localtime}
                        </div>
                    </div>
                    <WeatherAnimation weather = {weather}/>
                    <div className='weather-box'>
                        <div className='temp'>
                            {Math.round(items.current.temperature)}°С
                        </div>
                    </div>
                </div>

            ) : ('')}



        </main>
    )
}

export default OneDayForecast