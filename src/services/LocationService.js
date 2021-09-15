import { apiEndPoints } from "../api";
import { handleResponse } from "../utils/misc";
import { apiService } from "./ApiService";

class LocationService {
    async addLocation(locationData) {
        try {
            const data = await apiService
                .authenticated()
                .post(apiEndPoints.location.addLocation, locationData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async updateLocation(locationId, locationData) {
        try {
            const data = await apiService
                .authenticated()
                .post(`${apiEndPoints.location.updateLocation}${locationId}`, locationData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async deleteLocation(locationId) {
        try {
            const data = await apiService
                .authenticated()
                .post(`${apiEndPoints.location.deleteLocation}${locationId}`)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getUserAddresses() {
        try {
            const data = await apiService
                .authenticated()
                .get(apiEndPoints.location.getUserAddresses)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
}

export const locationService = new LocationService();
