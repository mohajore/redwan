import { apiService } from "./ApiService";
import { handleResponse } from "../utils/misc";
import countriesData from "../countries.json";
import { apiEndPoints } from "../api";
class GeneralServices {
    async getAllCountries() {
        try {
            const { countries } = countriesData;

            return handleResponse({ success: true, countries });
        } catch ({ response }) {
            // return handleResponse({ success: false, message: response.data.message, data: [] });
        }
    }

    async sendContactMessage(messageData) {
        try {
            const data = await apiService
                .authenticated()
                .post(apiEndPoints.sendMessage, messageData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async addOrRemoveFavourite(book_id) {
        try {
            const data = await apiService
                .authenticated()
                .post(apiEndPoints.addOrRemoveFavourite, { book_id })
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async addToCart(book_id, quantity) {
        try {
            const data = await apiService
                .authenticated()
                .post(apiEndPoints.addToCart, { book_id, quantity })
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async deleteBooksFromCart(book_id) {
        try {
            const data = await apiService
                .authenticated()
                .post(apiEndPoints.deleteBooksFromCart, { book_id })
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async checkout(orderData) {
        try {
            const data = await apiService
                .authenticated()
                .post(apiEndPoints.checkout, orderData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getPartners() {
        try {
            const data = await apiService
                .unauthenticated()
                .get(apiEndPoints.getPartners)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getClasses() {
        try {
            const data = await apiService
                .unauthenticated()
                .get(apiEndPoints.getClasses)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getSubjects() {
        try {
            const data = await apiService
                .unauthenticated()
                .get(apiEndPoints.getSubjects)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getFooterData() {
        try {
            const data = await apiService
                .unauthenticated()
                .get(apiEndPoints.getFooterData)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async searchBook(key) {
        try {
            const data = await apiService
                .authenticated()
                .get(`${apiEndPoints.searchBook}?key=${key}`)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getPublicPageData(machine_name) {
        try {
            const data = await apiService
                .unauthenticated()
                .get(`${apiEndPoints.getPublicPageData}?machine_name=${machine_name}`)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getClass(id) {
        try {
            const data = await apiService
                .unauthenticated()
                .get(`${apiEndPoints.getClass}?id=${id}`)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getSubject(id) {
        try {
            const data = await apiService
                .unauthenticated()
                .get(`${apiEndPoints.getSubject}?id=${id}`)
                .then(({ data }) => data);
            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
}

export const generalServices = new GeneralServices();
