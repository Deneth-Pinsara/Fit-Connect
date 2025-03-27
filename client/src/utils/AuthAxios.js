import axios from "axios";

const AuthAxios = axios.create();

AuthAxios.defaults.baseURL = "http://localhost:5001";

AuthAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default AuthAxios;
