import * as axios from 'axios';

const api = {
    key: '42229ffaf56b4ce2a6822b86133c960a',
    base: 'https://api.weatherbit.io/v2.0/current',
    baseDaily: 'https://api.weatherbit.io/v2.0/forecast/daily',
};

export const weatherValueAPI = {
    getFirstValue() {
        return axios.get(`${api.base}?city=Kiev?&key=${api.key}`).then((data) => data.data);
    },
    getWeatherValue(query) {
        return axios.get(`${api.base}?city=${query}?&key=${api.key}`).then((data) => data.data);
    },
};

export const weatherForecastAPI = {
    getForecastTenDays(query) {
        return axios.get(`${api.baseDaily}?city=${query}?&key=${api.key}&days=5`).then((data) => data);
    },
};
