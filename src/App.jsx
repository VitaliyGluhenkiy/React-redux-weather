import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink, Route } from 'react-router-dom';
import OneDayForecast from './components/OneDayForecast/OneDayForecast';
import TenDaysForecast from './components/TenDaysForecast/TenDaysForecast';

function App() {
    return (
        <div className="app">
            <Route exact path="/" render={() => <OneDayForecast />} />
            <Route path="/forecastTenDays" render={() => <TenDaysForecast />} />
        </div>
    );
}

export default App;
