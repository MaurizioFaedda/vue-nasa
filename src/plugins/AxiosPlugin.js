import axios from "axios";

const BASE_URL = "https://images-api.nasa.gov/search?q=";

export default {
    install(Vue) {
        Vue.prototype.axios = axios;
        Vue.prototype.base_url = BASE_URL;
    }
}