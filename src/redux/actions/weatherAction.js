export const setWeatherAction = (app_temp, city_name, country_code, datetime, description) => ({
    type: 'SET_WEATHER_DATA',
    data: { app_temp, city_name, country_code, datetime, description },
});

export const setForecastTenDays = (data) => ({
    type: 'SET_FORECAST_TEN_DAYS',
    data: data,
});
