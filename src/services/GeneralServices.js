import { apiService } from "./ApiService";
import { handleResponse } from "../utils/misc";
import axios from "axios";
import dd from "../countries.json";
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

    // async sendContactMessage(formData) {
    //     try {
    //         const newMessage = await apiService
    //             .authenticated()
    //             .post(apiEndpoints.general.sendContactMessage, formData)
    //             .then(({ data }) => data);

    //         return handleResponse({ success: true, ...newMessage });
    //     } catch ({ response }) {
    //         return handleResponse({ success: false, ...response?.data });
    //     }
    // }
}

export const generalServices = new GeneralServices();
