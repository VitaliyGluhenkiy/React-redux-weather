import React from "react";

const WeatherAnimation = ({weather}) => {
    return (
        <div className='weather-animation'>
            {(() => {
                switch (weather) {
                    case "Clear sky" :
                        return <div className="weather-icon">
                            <div className="icon">
                                <div className="sun">
                                    <div className="rays"></div>
                                </div>
                            </div>
                        </div>
                    case 'Scattered Clouds':
                        return <div className="weather-icon">
                            <div className="icon">
                                <div className="cloud white">
                                    <div className="sunny">
                                        <div className="m-rays"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    case 'Scattered clouds':
                        return <div className="weather-icon">
                            <div className="icon">
                                <div className="cloud white">
                                    <div className="sunny">
                                        <div className="m-rays"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    case 'Few clouds':
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
                    case 'Light rain':
                        return (
                            <div className="weather-icon">
                                <div className="icon">
                                    <div className="cloud"></div>
                                    <div className="rain"></div>
                                    <div className="rain"></div>
                                </div>
                            </div>
                        )
                    case 'Overcast Clouds' :
                        return (
                            <div className="weather-icon">
                                <div className="icon">
                                    <div className="cloud white">
                                        <div className="cloudy"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    case 'Overcast clouds' :
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