import React from 'react'
import { useSelector } from 'react-redux'

import GetDateMonth from 'components/Date/GetDateMonth'

import styles from './FiveDaysForecast.module.css'

const FiveDaysForecast = () => {

    const { forecast, isLoaded, } = useSelector(({ weatherData }) => ({
        forecast: weatherData.forecast,
        isLoaded: weatherData.isLoaded,

    }))


    return (
        <main>
            <div className={styles.temp_body}>
                {isLoaded &&
                    forecast.map((item, index) => (
                        <div key={index} className={styles.temp_block}>
                            <div className={styles.temp_info}>
                                <div className="date_time">
                                    <GetDateMonth datetime={item.datetime} />
                                </div>
                                <div className={styles.min_max_value}>
                                    <p>max</p>
                                    <p>min</p>
                                </div>
                                <div className={styles.temp}>
                                    <div>{item.app_max_temp}°</div>
                                    <div>{item.app_min_temp}°</div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </main>
    )
}

export default FiveDaysForecast
