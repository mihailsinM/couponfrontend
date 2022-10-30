export class Credentials {
    public email: string;
    public password: string;
    public clientType: CLIENT_TYPE;

    constructor(email: string, password: string, clienttipe: CLIENT_TYPE) {
        this.email = email;
        this.password = password;
        this.clientType = clienttipe;

    }
}
export enum CLIENT_TYPE {
    ADMINISTRATOR = "ADMINISTRATOR",
    COMPANY = "COMPANY",
    CUSTOMER = "CUSTOMER"
}