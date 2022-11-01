import {CLIENT_TYPE} from './Credentials';

export class CompanyModel {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public clientType: CLIENT_TYPE;
}