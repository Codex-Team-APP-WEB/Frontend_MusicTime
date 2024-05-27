import http from "../../shared/services/http-common.js";

export class FeedbackApiService {
    getAll() {
        return http.get(import.meta.env.VITE_API_BASE_URL + '/feedback');
    }
    create(feedback) {
        return http.post(import.meta.env.VITE_API_BASE_URL + '/feedback', feedback);
    }
    delete(id) {
        return http.delete(import.meta.env.VITE_API_BASE_URL + '/feedback/' + id);
    }
}
