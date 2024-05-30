import http from "../../shared/services/http-common.js";

export class FeedbackApiService {
    getAll() {
        return http.get(import.meta.env.VITE_API_BASE_URL + '/feedback');
    }
    create(feedback) {
        feedback.likes = 0;
        feedback.dislikes = 0;
        feedback.likedBy = [];
        feedback.dislikedBy = [];
        return http.post(import.meta.env.VITE_API_BASE_URL + '/feedback', feedback);
    }
    update(id, feedback) {
        return http.put(import.meta.env.VITE_API_BASE_URL + '/feedback/' + id, feedback);
    }
    delete(id) {
        return http.delete(import.meta.env.VITE_API_BASE_URL + '/feedback/' + id);
    }
}