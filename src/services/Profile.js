import { apiEndPoints } from "../api";
import { handleResponse } from "../utils/misc";
import { apiService } from "./ApiService";

class ProfileService {

    async ChangeProfile (userData) {
        try {
            const data = await apiService
                .authenticated()
                .post(apiEndPoints.profile.ChangeProfile, userData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async resetPassword (PasswordData) {
        try {
            const data = await apiService
                .authenticated()
                .post(apiEndPoints.profile.resetPassword, PasswordData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getUserData () {
        try {
            const data = await apiService
                .authenticated()
                .get(apiEndPoints.profile.getUserData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
    async checkEmail (email) {
        try {
            const data = await apiService
                .unauthenticated()
                .post(apiEndPoints.profile.checkEmail,email)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }




}

export const profileService = new ProfileService();
