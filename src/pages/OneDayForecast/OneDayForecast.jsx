import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './OneDayForecast.module.css'

import { getFirstValue} from 'redux/reducers/weatherReducer';
import WeatherAnimation from './WeatherAnimation/WeatherAnimation'

const OneDayForecast = () => {
    const dispatch = useDispatch()

    const { data } = useSelector(({ weatherData }) => {
        return {
            data: weatherData.data,
            query: weatherData.query
        }
    })
    const weather = data.description

    useEffect(() => {
        dispatch(getFirstValue())
    }, [dispatch])

    return (
        <main>
            {typeof data != 'undefined' && (
                <div>
                    <div className={styles.locationBox}>
                        <div>
                            <p>
                                {data.country_code} /{' '}
                                {data.city_name}
                            </p>
                        </div>
                        <div>{data.datetime}</div>
                    </div>
                    <WeatherAnimation weather={weather} />
                    <div className={styles.weatherBox}>
                        <div className={styles.temp}>
                            {Math.round(data.app_temp)}°С
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default OneDayForecast
