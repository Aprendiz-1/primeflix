import axios from "axios";

//https://api.themoviedb.org/3/movie/550?api_key=16ada54b9a5a98af44cc64424b33ec64

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;