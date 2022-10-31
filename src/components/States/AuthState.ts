import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import { AdminModel } from "../models/AdminModel";
import { CompanyModel } from "../models/CompanyModel";
import { Credentials } from "../models/Credentials";
import { CustomerModel } from "../models/CustomerModel";

export enum AuthActionsTypes {
    Login, Register, Logout
}

export interface AuthActions {
    type: AuthActionsTypes,
    payload?: any
}

export class CompanyState {

    public token: string;
    public company: CompanyModel;
    public admin: AdminModel;
    public customer: CustomerModel;
    public creds: Credentials;

    constructor() {
        this.token = localStorage.getItem("token");
    }
}

export function loginAction(token: string) {
    return { type: AuthActionsTypes.Login, payload: token }
}

export function registerAction(token: string) {
    return { type: AuthActionsTypes.Register, payload: token }
}

export function logoutAction() {
    return { type: AuthActionsTypes.Logout }
}

export function reducer(currentState: CompanyState, action: AuthActions) {
    const newState = { ...currentState };

    switch (action.type) {
        case AuthActionsTypes.Login:
        case AuthActionsTypes.Register:
            newState.token = action.payload;
            localStorage.setItem("token", newState.token)
            const tokenObject: CompanyModel = jwtDecode(newState.token);
            newState.company = tokenObject;
            break;
        case AuthActionsTypes.Logout:
            newState.token = null;
            newState.company = null;
            localStorage.removeItem("token");
            break;
    }
    return newState;
}

const authStore = createStore(reducer);
export default authStore;