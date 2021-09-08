import { apiService } from "./ApiService";
import { apiEndpoints } from "../api";
import { handleResponse } from "../utils/misc";

class ProfileService {
    async addNewUserProfile(profileData) {
        try {
            return handleResponse({
                success: true,
                ...(await apiService
                    .authenticated()
                    .post(apiEndpoints.profile.addNewUserProfile, profileData)
                    .then(({ data }) => data)),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getUserSingleProfile(userId) {
        try {
            return handleResponse({
                success: true,
                ...(await apiService
                    .authenticated()
                    .get(`${apiEndpoints.profile.getUserSingleProfile}${userId}`)
                    .then(({ data }) => data)),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async updateUserProfile(data) {
        try {
            return handleResponse({
                success: true,
                ...(await apiService
                    .authenticated()
                    .post(apiEndpoints.profile.updateUserProfile, data)
                    .then(({ data }) => data)),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async updateDynamicUserProfile(data) {
        try {
            return handleResponse({
                success: true,
                ...(await apiService
                    .authenticated()
                    .post(apiEndpoints.profile.updateDynamicUserProfile, data)
                    .then(({ data }) => data)),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
}

export const profileService = new ProfileService();
