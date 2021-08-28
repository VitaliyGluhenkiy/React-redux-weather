import React from "react";

const WeatherAnimation = ({weather}) => {
    return (
        <div className='weather-animation'>
            {(() => {
                switch (weather) {
                    case "Sunny" :
                        return <div className="weather-icon">
                            <div className="icon">
                                <div className="sun">
                                    <div className="rays"></div>
                                </div>
                            </div>
                        </div>
                    case "Clear" :
                        return <div className="weather-icon">
                            <div className="icon">
                                <div className="sun">
                                    <div className="rays"></div>
                                </div>
                            </div>
                        </div>
                    case 'Partly cloudy':
                        return <div className="weather-icon">
                            <div className="icon">
                                <div className="cloud white">
                                    <div className="sunny">
                                        <div className="m-rays"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    case 'Patchy rain possible':
                        return (
                            <div className="weather-icon">
                                <div className="icon">
                                    <div className="cloud white">
                                        <div className="sunny">
                                            <div className="m-rays"></div>
                                        </div>
                                        <div className="rain"></div>
                                        <div className="rain"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    case 'Overcast':
                        return (
                            <div className="weather-icon">
                                <div className="icon">
                                    <div className="cloud white">
                                        <div className="cloudy"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    case 'Light Rain':
                        return (
                            <div className="weather-icon">
                                <div className="icon">
                                    <div className="cloud"></div>
                                    <div className="rain"></div>
                                    <div className="rain"></div>
                                </div>
                            </div>
                        )
                    case 'Cloudy' :
                        return (
                            <div className="weather-icon">
                                <div className="icon">
                                    <div className="cloud white">
                                        <div className="cloudy"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    default:
                        return null;
                }
            })()}
        </div>

    )
}

export default WeatherAnimation