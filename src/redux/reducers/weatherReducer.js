import {weatherValueAPI} from "../../api/api";
import setWeatherAction from "../actions/weatherAction";


const initialState = {
    data: {
        app_temp: 30,
        city_name: 'London',
        country_code: '123',
        datetime: '12.12.12',
        weather: {
            description: 'Clouds12'
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


// export const getWeatherValue = (query) => {
//     return(dispatch) => {
//         weatherValueAPI.getWeatherValue(query).then(data => {
//             dispatch(setWeatherAction(data.data[0]))
//         })
//     }
// }


export default weatherReducer