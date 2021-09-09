import { apiService } from "./ApiService";
import { handleResponse } from "../utils/misc";
import axios from "axios";
import dd from "../countries.json";
import { apiEndPoints } from "../api";
class GeneralServices {
    async getAllCountries() {
        try {
            const { countries } = dd;

            return handleResponse({ success: true, countries });
        } catch ({ response }) {
            // return handleResponse({ success: false, message: response.data.message, data: [] });
        }
    }

    // async uploadImage(formData) {
    //     try {
    //         return await apiService
    //             .authenticated()
    //             .post(apiEndpoints.general.uploadFile, formData)
    //             .then(({ data }) => data);
    //     } catch ({ response }) {
    //         return handleResponse({ success: false, message: response.data.message, data: [] });
    //     }
    // }

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
}

export const generalServices = new GeneralServices();
