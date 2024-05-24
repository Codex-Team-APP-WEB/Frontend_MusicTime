import http from "../../shared/services/http-common.js";

export class ContractApiService {
    getAll() {
        return http.get(import.meta.env.VITE_API_BASE_URL + '/contracts');
    }
}