import React from "react";
import classes from './Weathers.module.css'

const Weathers = () => {
    return (
        <div className={classes.weatherIcon}>
            <div className={classes.icon}>
                <div className={classes.cloud}></div>
                <div className={classes.rain}></div>
                <div className={classes.rain}></div>
            </div>
        </div>
    )
}

export default Weathers