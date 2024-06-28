import http from "../../shared/services/http-common.js";

export class ContractApiService {
    create(data) {
        return http.post(import.meta.env.VITE_API_BASE_URL + '/contracts', data);
    }

    getAll() {
        return http.get(import.meta.env.VITE_API_BASE_URL + '/contracts');
    }

    getById(id) {
        return http.get(import.meta.env.VITE_API_BASE_URL + `/contracts/${id}`);
    }


}