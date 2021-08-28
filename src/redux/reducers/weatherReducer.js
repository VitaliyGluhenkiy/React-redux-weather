import {weatherForecastAPI, weatherValueAPI} from "../../api/api";


const initialState = {
    data: {
        current: {
            temperature: 10,
            weather_descriptions: "Sunny"
        },
        location: {
            country: null,
            name: null,
            localtime: null
        },
        request: {}
    },
    forecast: [

    ],
    isLoaded: false,
    query: 'Brovary'
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER_DATA':
            return {
                ...state,
                data: action.payload
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
        default:
            return state
    }
}

const setWeatherAction = (data) => ({
    type: 'SET_WEATHER_DATA',
    payload: data
})

const setForecastTenDays = (data) => ({
    type: 'SET_FORECAST_TEN_DAYS',
    data: data,
})


export const getWeatherValue = (query) => {
    return (dispatch) => {
        weatherValueAPI.getWeatherValue(query).then(request => {
            dispatch(setWeatherAction(request.data))
        })
    }
}

export const getFirstValue = () => {
    return (dispatch) => {
        weatherValueAPI.getFirstValue().then(request => {
            dispatch(setWeatherAction(request.data))
        })
    }
}

export const getForecast10 = (query) => {
    return (dispatch) => {
        weatherForecastAPI.getForecastTenDays(query).then(data => {
            dispatch(setForecastTenDays(data.data))
        })
    }
}


export default weatherReducer