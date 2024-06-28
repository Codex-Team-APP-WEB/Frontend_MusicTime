import http from "../../shared/services/http-common.js";

export class CostumerApiService {

        getAll() {
            return http.get('/costumers');
        }

        getById(id) {
            return http.get(`/customers/${id}`);
        }

        create(costumerResource) {
            return http.post('/costumers', costumerResource);
        }

        update(id, costumerResource) {
            return http.put(`/costumers/${id}`, costumerResource);
        }

        delete(id) {
            return http.delete(`/costumers/${id}`);
        }
}