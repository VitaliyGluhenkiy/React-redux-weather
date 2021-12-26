import { weatherForecastAPI, weatherValueAPI } from 'api/api'
import { setForecastTenDays, setWeatherAction } from '../actions/weatherAction'

const initialState = {
    data: {
        app_temp: null,
        city_name: null,
        country_code: null,
        datetime: null,
        description: null
    },
    forecast: {
        app_max_temp: null,
        app_min_temp: null,
        datetime: null
    },
    isLoaded: false,
    query: 'Brovary'
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER_DATA':
            return {
                ...state,
                data: { ...action.data }
            }
        case 'SET_FORECAST_TEN_DAYS':
            return {
                ...state,
                forecast: action.data.data,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        case 'SET_QUERY':
            return {
                ...state,
                query: action.query
            }
        default:
            return state
    }
}

export const setQuery = query => ({
    type: 'SET_QUERY',
    query: query
})

export const getWeatherValue = query => {
    return dispatch => {
        weatherValueAPI.getWeatherValue(query).then(data => {
            let { app_temp, city_name, country_code, datetime } = data.data[0]
            let description = data.data[0].weather.description
            dispatch(
                setWeatherAction(
                    app_temp,
                    city_name,
                    country_code,
                    datetime,
                    description
                )
            )
        })
    }
}

export const getFirstValue = () => {
    return dispatch => {
        weatherValueAPI.getFirstValue().then(data => {
            let { app_temp, city_name, country_code, datetime } = data.data[0]
            let description = data.data[0].weather.description
            dispatch(
                setWeatherAction(
                    app_temp,
                    city_name,
                    country_code,
                    datetime,
                    description
                )
            )
        })
    }
}

export const getForecastFiveDays = query => {
    return dispatch => {
        weatherForecastAPI.getForecastTenDays(query).then(data => {
            dispatch(setForecastTenDays(data.data))
            console.log(data.data);
        })
    }
}

export default weatherReducer
