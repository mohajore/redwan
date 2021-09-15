import { apiService } from "./ApiService";
import { handleResponse } from "../utils/misc";
import { apiEndPoints } from "../api";
class BookService {
    async getBookData(bookId) {
        try {
            const data = await apiService
                .unauthenticated()
                .get(`${apiEndPoints.getBookData}?book_id=${bookId}`)
                .then(({ data }) => data);

            return handleResponse({ success: true, ...data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
}

export const bookService = new BookService();
