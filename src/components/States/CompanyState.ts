import { createStore } from "redux";
import { CompanyModel } from "../models/CompanyModel";


export class CompanyState {
    public companies: CompanyModel[] = []; 
}


export enum CompanyActionType {
    FetchCompanies, AddCompany, EditCompany, DeleteCompany
}

export interface CompanyAtion {
    type: CompanyActionType,
    payload: any
}

export function FetchAction(companys: CompanyModel[]){
    return {type: CompanyActionType.FetchCompanies, payload: companys};
}
export function AddAction(company: CompanyModel){
    return {type: CompanyActionType.AddCompany, payload: company};
}
export function EditAction(company: CompanyModel){
    return {type: CompanyActionType.EditCompany, payload: company};
}
export function DeleteAction(id: number){
    return {type: CompanyActionType.DeleteCompany, payload: id};
}


export function companyReducer(currentState = new CompanyState(), action: CompanyAtion) {
    
    const newState = { ...currentState };

    switch (action.type) {

        case CompanyActionType.FetchCompanies:
            newState.companies = action.payload; 
            break;

        case CompanyActionType.AddCompany:
            newState.companies.push(action.payload);
            break;

        case CompanyActionType.EditCompany:
            const indexToEdit = newState.companies.findIndex(p=>p.id == action.payload.id);
            if(indexToEdit >= 0)
                newState.companies[indexToEdit] = action.payload;
            break;

        case CompanyActionType.DeleteCompany:
            const indexToDelete = newState.companies.findIndex(p=>p.id == action.payload);
            if(indexToDelete >= 0)
                newState.companies.splice(indexToDelete, 1);
            break;

    }

    return newState;
}

export const companyStore = createStore(companyReducer);