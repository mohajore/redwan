import { apiEndPoints } from "../api";
import { handleResponse } from "../utils/misc";
import { apiService } from "./ApiService";

class CartService {
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

    async getCartData() {
        try {
            const data = await apiService
                .authenticated()
                .get(apiEndPoints.cart.getCartData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
}

export const cartService = new CartService();
