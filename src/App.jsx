import React from 'react'
import { useSelector} from "react-redux";

import {NavLink, Route} from "react-router-dom";
import OneDayForecast from "./components/OneDayForecast/OneDayForecast";
import TenDaysForecast from "./components/TenDaysForecast/TenDaysForecast";




function App() {

    const state = useSelector(({weatherData}) => {
        return {
            forecast: weatherData.forecast,
            isLoaded: weatherData.isLoaded,
            temperature: weatherData.data.current.temperature
        }

    })

    // console.log(state.forecast)








return (

    <div className={
        (typeof state.temperature != 'undefined')
        ? ((state.temperature > 17)
            ? 'app warm' : 'app') : 'app'
    }>
        {/*<NavLink to='/forecastTenDays'><button>10days</button></NavLink>*/}
        {/*<NavLink to=''><button>1days</button></NavLink>*/}

        <Route exact path='/'  render={()=> <OneDayForecast />}/>
        <Route path='/forecastTenDays' render={()=> <TenDaysForecast forecast={state.forecast} isLoaded={state.isLoaded}/>}/>
    </div>
);
}


export default App
