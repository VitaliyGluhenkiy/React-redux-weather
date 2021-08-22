import * as axios from "axios";


const api = {
    key: '42229ffaf56b4ce2a6822b86133c960a',
    base: 'https://api.weatherbit.io/v2.0/current'

}


export const weatherValueAPI = {
    getFirstValue(){
        return axios.get(`${api.base}?city=London&key=${api.key}&include=minutely`)
            .then(({data}) => data)
    },
    getWeatherValue(query) {
        return axios.get(`${api.base}?city=${query}&key=${api.key}&include=minutely`)
            .then(({data}) => data)
    }
}