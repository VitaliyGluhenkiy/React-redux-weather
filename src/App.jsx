import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getFirstValue, getWeatherValue} from "./redux/reducers/weatherReducer";
import Forecast from "./components/Forecast/Forecast";




function App() {

    const [query, setQuery] = useState('')

    const dispatch = useDispatch()
    const state = useSelector(({weatherData}) => {
        return {
            items: weatherData.data,
            forecast: weatherData.forecast,
            isLoaded: weatherData.isLoaded
        }

    })

    console.log(state.forecast)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getWeatherValue(query))
    }

    useEffect(() => {
        dispatch(getFirstValue())
    },[])




return (

    <div className={
        (typeof state.items != 'undefined')
        ? ((state.items.app_temp > 17)
            ? 'app warm' : 'app') : 'app'
    }>
        <main>
            <div className='search-box'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className='search-bar'
                        placeholder='Search...'
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <input type="submit" value="Submit" className='buttonInput'/>
                </form>
            </div>
            <div className='weather'>
                {/*{state.items.weather.icon === 'Scattered Clouds' ? <Weathers/> : 'Scattered Clouds' }*/}
                {state.items.weather.icon}
            </div>
            {(typeof state.items != 'undefined') ? (
                <div>
                    <div className='location-box'>
                        <div className='location'>
                            <p>{state.items.city_name} / {state.items.country_code}</p>
                        </div>
                        <div className='date'>
                            {state.items.datetime}
                        </div>
                    </div>
                    <div className='weather-box'>
                        <div className='temp'>
                            {Math.round(state.items.app_temp)}°С
                        </div>
                    </div>
                </div>

            ) : ('')}

         </main>
        <Forecast forecast={state.forecast} isLoaded={state.isLoaded}/>
    </div>
);
}


export default App
