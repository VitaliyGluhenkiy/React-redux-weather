import {weatherValueAPI} from "../../api/api";


const initialState = {
    data: {
        app_temp: null,
        city_name: null,
        country_code: null,
        datetime: null,
        weather: {
            description: null
        }

    }
}

const weatherReducer = (state=initialState , action) => {
    if(action.type === 'WEATHER_DATA'){
        return {
            ...state,
            data: action.payload
        }

    }
    return state
}

const setWeatherAction = (data) => ({
    type: 'WEATHER_DATA',
    payload: data
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


export default weatherReducer