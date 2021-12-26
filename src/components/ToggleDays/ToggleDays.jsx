import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getForecastFiveDays } from '../../redux/reducers/weatherReducer';

import styles from './ToggleDays.module.css'


const ToggleDays = () => {

    const dispatch = useDispatch()
    const [isActiveFirst, setActiveFirst] = useState(true)
    const [isActiveSecond, setActiveSecond] = useState(false)
    const { query } = useSelector(({ weatherData }) => {
        return {
            data: weatherData.data,
            query: weatherData.query
        }
    })

    const handleSubmitForecast = () => {
        dispatch(getForecastFiveDays(query))
    }

    const toggleClassSecond = () => {
        if(isActiveFirst){
            setActiveFirst(false)
            setActiveSecond(true)
        }
    }
    const toggleClassFirst = () => {
        if(isActiveSecond){
            setActiveSecond(false)
            setActiveFirst(true)
        }
    }
    return (
        <div className={styles.daysBlock}>
            <Link to="/">
                <button onClick={toggleClassFirst} className={isActiveFirst ? styles.active_button : null}>
                    1 day
                </button>
            </Link>
            <Link to="/forecastFiveDays">
                <div onClick={toggleClassSecond}>
                    <button onClick={handleSubmitForecast} className={isActiveSecond ? styles.active_button : null}>
                        5 days
                    </button>
                </div>
            </Link>
        </div>


    )
}


export default ToggleDays
