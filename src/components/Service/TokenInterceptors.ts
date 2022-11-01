import axios from "axios";
import authStore from "../States/AuthState";

export function createInterceptors() {
    axios.interceptors.request.use(request => {
        const token = authStore.getState().token;
        if (token)
            request.headers = {
                authorization: "Bearer " + token
            }
        return request;
    })
}