import React from "react";
import {getForecast10, getForecastTenDays, getForecastWeather} from "../../redux/reducers/weatherReducer";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const TenDaysForecast = () => {

    const dispatch= useDispatch()

    const state = useSelector(({weatherData}) => {
        return {
            forecast: weatherData.forecast,
            isLoaded: weatherData.isLoaded,
            query: weatherData.query
        }
    })

    const handleSubmitForecast = () => {
        dispatch(getForecast10(state.query))
    }

    console.log(state)

    return (
        <div>
            <div>
                <NavLink to='/'>Вернуться обратно</NavLink>
            </div>
            <button onClick={handleSubmitForecast}>Получить прогноз на 10 дней</button>
            {state.isLoaded
                ? state.forecast.map((item , index) =>
                <div key={index}>
                    <li>{item.app_max_temp}</li>
                </div>)
                : ''
            }
        </div>
    )
}

export default TenDaysForecast