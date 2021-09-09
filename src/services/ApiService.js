import axios from "axios";

class ApiService {
    baseURL = process.env.REACT_APP_API_ENDPOINT;
    token = process.env.REACT_APP_API_TOKEN;

    get accessToken() {
        return window.localStorage.getItem("accessToken") ?? 0;
    }

    authenticated() {
        return axios.create({ baseURL: this.baseURL, headers: { Token: this.token, Authorization: `Bearer ${this.accessToken}`, Language: "en" } });
    }

    unauthenticated() {
        return axios.create({ baseURL: this.baseURL, headers: { Token: this.token, Authorization: `Bearer ${this.accessToken}`, Language: "en" } });
    }

    storeToken(token) {
        window.localStorage.setItem("accessToken", token);
    }
    imageLink = "http://192.168.1.88:8000/storage/";
}

export const apiService = new ApiService();
