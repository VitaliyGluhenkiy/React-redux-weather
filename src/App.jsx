import React from 'react'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import setWeatherAction from "./redux/actions/weatherAction";


const api = {
    key: '42229ffaf56b4ce2a6822b86133c960a',
    base: 'https://api.weatherbit.io/v2.0/current'

}

function App() {
    const [query, setQuery] = React.useState('')

    const dispatch = useDispatch()
    const state = useSelector(({weatherData}) => {
        return {
            items: weatherData.data

        }

    })


    function addQuery(e) {
        if(e.key === 'Enter'){
            axios.get(`${api.base}?city=${query}&key=${api.key}&include=minutely`).then(({data}) => {
                dispatch(setWeatherAction(data.data[0]))
                console.log(data.data[0])
            })
        } else {
            axios.get(`${api.base}?city=London&key=${api.key}&include=minutely`).then(({data}) => {
                dispatch(setWeatherAction(data.data[0]))

            })
        }

    }




return (
    <div className={
        (typeof state.items != 'undefined')
        ? ((state.items.app_temp > 17)
            ? 'app warm' : 'app') : 'app'
    }>
        <main>
            <div className='search-box'>
                <input
                    type="text"
                    className='search-bar'
                    placeholder='Search...'
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={addQuery}
                />
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
                        <div className='weather'>
                            {state.items.weather.description}
                        </div>
                    </div>
                </div>

            ) : ('')}

         </main>
    </div>
);
}


export default App
