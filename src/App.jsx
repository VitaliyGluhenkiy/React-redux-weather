import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux';

import OneDayForecast from './pages/OneDayForecast/OneDayForecast'
import FiveDaysForecast from './pages/FiveDaysForecast/FiveDaysForecast'
import SearchMenu from './components/SearchMenu/SearchMenu';
import ToggleDays from './components/ToggleDays/ToggleDays';

function App() {
    const {query}= useSelector(state => state.weatherData)

    return (
        <div className="app">
            <SearchMenu query={query}/>
            <ToggleDays/>
            <Route
                exact path="/"
                render={() => <OneDayForecast/>}/>
            <Route
                path="/forecastFiveDays"
                render={() => <FiveDaysForecast/>}
            />
            <Redirect to="/"/>

        </div>
    )
}

export default App
