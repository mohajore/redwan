import { apiEndPoints } from "../api";
import { handleResponse } from "../utils/misc";
import { apiService } from "./ApiService";

class AuthService {
    async login(userData) {
        try {
            const data = await apiService
                .unauthenticated()
                .post(apiEndPoints.login, userData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    logout() {
        window.localStorage.clear();
        window.location.href = "/login";
    }
}

export const authService = new AuthService();
