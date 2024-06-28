
import http from "../../shared/services/http-common.js";

export class MusicianApiService {

    getAll() {
        return http.get('/artists');
    }


    getById(id) {
        return http.get(`/artists/${id}`);
    }


    create(musicianResource) {
        return http.post('/artists', musicianResource);
    }


    update(id, musicianResource) {
        return http.put(`/artists/${id}`, musicianResource);
    }


    delete(id) {
        return http.delete(`/artists/${id}`);
    }

    findByTitle(title) {
        return http.get(`/artists?name=${name}`);
    }


}
