import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getFirstValue, getWeatherValue} from "./redux/reducers/weatherReducer";
import Weathers from "./components/Weathers/Weathers";




function App() {

    const [query, setQuery] = useState('')

    const dispatch = useDispatch()
    const state = useSelector(({weatherData}) => {
        return {
            items: weatherData.data

        }

    })

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
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className='weather'>
                {state.items.weather.description === 'Scattered Clouds' ? <Weathers/> : 'Scattered Clouds' }
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
    </div>
);
}


export default App
