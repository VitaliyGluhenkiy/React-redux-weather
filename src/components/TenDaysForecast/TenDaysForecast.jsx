import React from 'react';
import { getForecast10, getForecastTenDays, getForecastWeather } from '../../redux/reducers/weatherReducer';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './TenDaysForecast.css';

const TenDaysForecast = () => {
    const dispatch = useDispatch();

    const state = useSelector(({ weatherData }) => {
        return {
            forecast: weatherData.forecast,
            isLoaded: weatherData.isLoaded,
            query: weatherData.query,
        };
    });

    const handleSubmitForecast = () => {
        dispatch(getForecast10(state.query));
    };

    console.log(state);

    return (
        <div>
            <div>
                <NavLink to="/">Вернуться обратно</NavLink>
            </div>
            <button onClick={handleSubmitForecast}>Получить прогноз на 5 дней</button>
            <div className="temp_body">
                {state.isLoaded
                    ? state.forecast.map((item, index) => (
                          <div key={index}>
                              <div className="temp_info">
                                  <div className="date_time">{item.datetime}</div>
                                  <div className="temp">
                                      <div>{item.app_max_temp}°</div>
                                      <div>{item.app_min_temp}°</div>
                                  </div>
                              </div>
                          </div>
                      ))
                    : ''}
            </div>
        </div>
    );
};

export default TenDaysForecast;
