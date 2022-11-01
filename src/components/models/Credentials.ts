export class Credentials {
    public email: string;
    public password: string;
    public clientType: CLIENT_TYPE;

    constructor(email: string, password: string, clientType: CLIENT_TYPE) {
        this.email = email;
        this.password = password;
        this.clientType = clientType;
    }
}

export enum CLIENT_TYPE {
    ADMINISTRATOR = "ADMINISTRATOR",
    COMPANY = "COMPANY",
    CUSTOMER = "CUSTOMER"
}