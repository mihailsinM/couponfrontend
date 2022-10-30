import axios from "axios";
import { CompanyModel } from "../Models/CompanyModel";
import { Credentials } from "../Models/Credentials";
import authStore, { loginAction, logoutAction, registerAction } from "../States/AuthState";
import appConfig from "../Util/Config";

class AuthService {
    public async login(credentials: Credentials) {
        const response = axios.post<string>(appConfig.authUrl + "login", credentials);
        const token = (await response).data;
        authStore.dispatch(loginAction(token));
    }

    public async register(company: CompanyModel) {
        const response = axios.post<string>(appConfig.authUrl + "register", company);
        const token = (await response).data;
        authStore.dispatch(registerAction(token));
    }

    public async logout() {
        authStore.dispatch(logoutAction());
    }
}

const authService = new AuthService();
export default authService;