import weatherReducer from "./reducers/weatherReducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    weatherData: weatherReducer

})

export default rootReducer