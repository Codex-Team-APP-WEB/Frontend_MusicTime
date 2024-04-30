
import http from "../../shared/services/http-common.js";

export class TutorialsApiService {

    getAll() {
        return http.get('/musician');
    }

    getById(id) {
        return http.get(`/musician/${id}`);
    }


    create(tutorialResource) {
        return http.post('/musician', tutorialResource);
    }


    update(id, tutorialResource) {
        return http.put(`/musician/${id}`, tutorialResource);
    }


    delete(id) {
        return http.delete(`/musician/${id}`);
    }

    findByTitle(title) {
        return http.get(`/musician?name=${name}`);
    }
}