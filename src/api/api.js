import * as axios from "axios";


const api = {
    key: 'e5b98bca1d9631baeae73754c63934d3',
    base: 'http://api.weatherstack.com/current',
}
const apiWeatherBit = {
    key: '42229ffaf56b4ce2a6822b86133c960a',
    base: 'https://api.weatherbit.io/v2.0/forecast/daily'
}

export const weatherValueAPI = {
    getFirstValue(){
        return axios.get(`${api.base}?access_key=${api.key}&query=Brovary`)
            .then(request => request)
    },
    getWeatherValue(query) {
        return axios.get(`${api.base}?access_key=${api.key}&query=${query}`)
            .then(request => request)
    }
}

export const weatherForecastAPI = {
    getForecastTenDays(query) {
        return axios.get(`${apiWeatherBit.base}?city=${query}?&key=${apiWeatherBit.key}&days=10`)
            .then(data => data)
    }
}