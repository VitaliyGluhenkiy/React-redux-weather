import React, {useEffect, useState} from "react";
import {getFirstValue, getWeatherValue, setQuery} from "../../redux/reducers/weatherReducer";
import {useDispatch, useSelector} from "react-redux";
import './OneDayForecast.css'
import {NavLink} from "react-router-dom";
import WeatherAnimation from "./WeatherAnimation/WeatherAnimation";

const OneDayForecast = () => {

    const dispatch = useDispatch()

    const state = useSelector(({weatherData}) => {
        return {
            data: weatherData.data,
            query: weatherData.query
        }

    })
    const items = state.data
    const weather = state.data.description

    const setValueQuery = (query) => {
        dispatch(setQuery(query))
    }

    console.log(weather)
    // console.log(state.data)

    useEffect(() => {
        dispatch(getFirstValue())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getWeatherValue(state.query))
    }

    return (
        <main>
            <div className='search-box'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className='search-bar'
                        placeholder='Search...'
                        value={state.query}
                        onChange={e => setValueQuery(e.target.value)}
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
                            <p>{items.country_code} / {items.city_name}</p>
                        </div>
                        <div className='date'>
                            {items.datetime}
                        </div>
                    </div>
                    <WeatherAnimation weather = {weather}/>
                    <div className='weather-box'>
                        <div className='temp'>
                            {Math.round(items.app_temp)}°С
                        </div>
                    </div>
                </div>

            ) : ('')}



        </main>
    )
}

export default OneDayForecast