import React from 'react';
import './WeatherAnimation.css'

const renderWeather = (weather) => {
    switch (weather) {
        case "Clear sky":
            return (
                <div className="sun">
                    <div className="rays" />
                </div>
            );

        case "Scattered Clouds":
            return (
                <div className="cloud white">
                    <div className="sunny">
                        <div className="m-rays" />
                    </div>
                </div>
            );

        case "Scattered clouds":
            return (
                <div className="cloud white">
                    <div className="sunny">
                        <div className="m-rays" />
                    </div>
                </div>
            );
        case "Few clouds":
            return (
                <div className="cloud white">
                    <div className="sunny">
                        <div className="m-rays" />
                    </div>
                </div>
            );
        case "Patchy rain possible":
            return (
                <div className="cloud white">
                    <div className="sunny">
                        <div className="m-rays" />
                    </div>
                    <div className="rain" />
                    <div className="rain" />
                </div>
            );
        case "Overcast":
            return (
                <div className="cloud white">
                    <div className="cloudy" />
                </div>
            );
        case "Light rain":
            return (
                <>
                    <div className="cloud" />
                    <div className="rain" />
                    <div className="rain" />
                </>
            );
        case "Overcast Clouds":
            return (
                <div className="cloud white">
                    <div className="cloudy" />
                </div>
            );
        case "Overcast clouds":
            return (
                <div className="cloud white">
                    <div className="cloudy" />
                </div>
            );
        default:
            return null;
    }
};

const WeatherAnimation = ({ weather }) => {
    return (
        <div className="weather-animation">
            <div className="weather-icon">
                <div className="icon">{renderWeather(weather)}</div>
            </div>
        </div>
    );
};

export default WeatherAnimation;
