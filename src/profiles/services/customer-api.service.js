import http from "../../shared/services/http-common.js";

export class CustomerApiService {

        getAll() {
            return http.get('/customers');
        }

        getById(id) {
            return http.get(`/customers/${id}`);
        }

        create(customerResource) {
            return http.post('/customers', customerResource);
        }

        update(id, customerResource) {
            return http.put(`/customers/${id}`, customerResource);
        }

        delete(id) {
            return http.delete(`/customers/${id}`);
        }
}