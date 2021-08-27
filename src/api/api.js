import * as axios from "axios";


const api = {
    key: 'e5b98bca1d9631baeae73754c63934d3',
    base: 'http://api.weatherstack.com/current',
    forecastBase: 'http://api.weatherbit.io/v2.0/forecast/'


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
    forecastWeather() {
        return axios.get(`${api.forecastBase}daily?city=Kiev&days=10&key=${api.key}`)
            .then(({data}) => data)
    }
}