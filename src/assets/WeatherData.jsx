import React from 'react'

const WeatherData = (props) => {
    return (
        <main>
            <div className='search-box'>
                <input type="text"
                       className='search-bar'
                       placeholder='Search...'/>
            </div>
            <div className='location-box'>
                <div className='location'>
                    <p>Brovary</p>
                </div>
                <div className='date'>
                    {props.dateBuilder(new Date())}
                </div>
            </div>
            <div className='weather-box'>
                {props.items.map( (items) => <div key={items.id}>{items.app_temp} </div>)}
                <div className='weather'>
                    Sunny
                </div>
            </div>
        </main>
    )
}

export default WeatherData