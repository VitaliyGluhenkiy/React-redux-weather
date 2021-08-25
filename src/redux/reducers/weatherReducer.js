import {weatherForecastAPI, weatherValueAPI} from "../../api/api";


const initialState = {
    data: {
        app_temp: null,
        city_name: null,
        country_code: null,
        datetime: null,
        weather: {
            description: null
        }

    },
    forecast: {
        app_max_temp: 123,
        app_min_temp: 321,

    },
    isLoaded: false
}

const weatherReducer = (state=initialState , action) => {
    switch(action.type) {
        case 'WEATHER_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'SET_FORECAST_WEATHER':
            return {
                ...state,
                forecast: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return{
                ...state,
                isLoaded: action.payload

            }
        default: return state
    }
}

const setWeatherAction = (data) => ({
    type: 'WEATHER_DATA',
    payload: data
})

const setForecastWeather = (data) => ({
    type: 'SET_FORECAST_WEATHER',
    payload: data ,
})

const setLoaded = payload => ({
    type:'SET_LOADED',
    payload
})


export const getWeatherValue = (query) => {
    return(dispatch) => {
        weatherValueAPI.getWeatherValue(query).then(data => {
            dispatch(setWeatherAction(data.data[0]))
        })
    }
}

export const getFirstValue = () => {
    return(dispatch) => {
        weatherValueAPI.getFirstValue().then(data => {
            dispatch(setWeatherAction(data.data[0]))
        })
    }
}

export const getForecastWeather = () => {
    return (dispatch) => {
        weatherForecastAPI.forecastWeather().then(data => {
            dispatch(setForecastWeather(data.data))
        })
    }
}


export default weatherReducer