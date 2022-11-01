import {createStore} from "redux";
import {AdminModel} from "../models/AdminModel";
import {CompanyModel} from "../models/CompanyModel";
import {Credentials} from "../models/Credentials";
import {CustomerModel} from "../models/CustomerModel";
import jwtDecode from 'jwt-decode';

export enum AuthActionsTypes {
    Login, Register, Logout
}

export interface AuthActions {
    type: AuthActionsTypes,
    payload?: any
}

export interface CompanyState {
    token: string;
    company: CompanyModel;
    admin: AdminModel;
    customer: CustomerModel;
    credentials: Credentials;
}

export function loginAction(token: string) {
    return {type: AuthActionsTypes.Login, payload: token}
}

export function registerAction(token: string) {
    return {type: AuthActionsTypes.Register, payload: token}
}

export function logoutAction() {
    return {type: AuthActionsTypes.Logout}
}

export function reducer(currentState: CompanyState, action: AuthActions): CompanyState {
    const newState: CompanyState = {...currentState};

    switch (action.type) {
        case AuthActionsTypes.Login:
        case AuthActionsTypes.Register:
            newState.token = action.payload;
            localStorage.setItem("token", newState.token)
            const tokenObject: Credentials = jwtDecode(newState.token);
            newState.credentials = tokenObject;
            break;
        case AuthActionsTypes.Logout:
            newState.token = null;
            newState.credentials = null;
            localStorage.removeItem("token");
            break;
    }
    return newState;
}

const authStore = createStore(reducer);
export default authStore;