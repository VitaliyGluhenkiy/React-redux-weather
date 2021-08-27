import React from "react";
import {getForecastWeather} from "../../redux/reducers/weatherReducer";
import {useDispatch} from "react-redux";

const TenDaysForecast = ({forecast, isLoaded}) => {

    const dispatch= useDispatch()

    const handleSubmitForecast = () => {
        dispatch(getForecastWeather())
    }

    return (
        <div>
            <button onClick={handleSubmitForecast}>Получить прогноз на 10 дней</button>
            {isLoaded
                ? forecast.map((item) =>
                <div>
                    <li>{item.app_max_temp}</li>
                </div>)
                : '123'
            }
        </div>
    )
}

export default TenDaysForecast