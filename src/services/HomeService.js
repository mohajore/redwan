import { apiService } from "./ApiService";
import { handleResponse } from "../utils/misc";
import { apiEndPoints } from "../api";
class HomeService {
    async getHomeData() {
        try {
            const data = await apiService
                .unauthenticated()
                .get(apiEndPoints.getHomeData)
                .then(({ data }) => data);

            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
}

export const homeService = new HomeService();
