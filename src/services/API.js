import {API_BASE_URL, API_KEY} from './Static'

const axios = require('axios')

class API {
    static getMovies = (parameters = {}) => {
        return axios.get(`${API_BASE_URL}/movie/now_playing`, {params : {...parameters, api_key : API_KEY}})
    }

    static getDetailMovie = (movieID) => {
        return axios.get(`${API_BASE_URL}/movie/${movieID}/similar`, {params : { api_key : API_KEY}})
    }
}

export default API