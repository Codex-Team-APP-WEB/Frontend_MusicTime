import axios from "axios";
import {authenticationInterceptor} from "../../IAM/services/authentication.interceptor.js";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const http = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json'}
});

// Add authentication interceptor
http.interceptors.request.use(authenticationInterceptor);

export default http;