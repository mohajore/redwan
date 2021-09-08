import axios from "axios";

class ApiService {
    baseURL = process.env.REACT_APP_API_ENDPOINT;
    token = process.env.REACT_APP_API_TOKEN;

    get accessToken() {
        return window.localStorage.getItem("accessToken") ?? "";
    }

    authenticated() {
        return axios.create({ baseURL: this.baseURL, headers: { Token: this.token, Authorization: `Bearer ${this.accessToken}` } });
    }

    unauthenticated() {
        return axios.create({ baseURL: this.baseURL, headers: { Token: this.token } });
    }

    storeToken(token) {
        window.localStorage.setItem("accessToken", token);
    }
}

export const apiService = new ApiService();
