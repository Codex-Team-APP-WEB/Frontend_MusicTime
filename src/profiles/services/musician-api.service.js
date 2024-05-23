
import http from "../../shared/services/http-common.js";

export class MusicianApiService {

    getAll() {
        return http.get('/musician');
    }


    getById(id) {
        return http.get(`/musician/${id}`);
    }


    create(musicianResource) {
        return http.post('/musician', musicianResource);
    }


    update(id, musicianResource) {
        return http.put(`/musician/${id}`, musicianResource);
    }


    delete(id) {
        return http.delete(`/musician/${id}`);
    }

    findByTitle(title) {
        return http.get(`/musician?name=${name}`);
    }
}
