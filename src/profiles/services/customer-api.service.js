import http from "../../shared/services/http-common.js";

export class CustomerApiService {

        getAll() {
            return http.get('/customers');
        }

        getById(id) {
            return http.get(`/customers/${id}`);
        }

        create(costumerResource) {
            return http.post('/customers', costumerResource);
        }

        update(id, costumerResource) {
            return http.put(`/customers/${id}`, costumerResource);
        }

        delete(id) {
            return http.delete(`/customers/${id}`);
        }
}