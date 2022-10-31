class Config {
}

class DevConfig extends Config {
    public couponAddUrl = "http://localhost:8080/addcoupon/";
    public couponGetAllUrl = "http://localhost:8080/coupons/";

    public ccustomerGetAllUrl = "http://localhost:8080/customers";
    public ccustomerAddlUrl = "http://localhost:8080/addcustomer/";

    public companyAddUrl = "http://localhost:8080/addcompany/";
    public companyGetAllUrl = "http://localhost:8080/companies/";

    public authUrl: string = "http://localhost:8080/auth/";

    

}

class TestingConfig extends Config {
    public couponAddUrl = "http://localhost:8080/addcoupon/";
    public couponGetAllUrl = "http://localhost:8080/coupons";

    public ccustomerGetAllUrl = "http://localhost:8080/customers/";
    public ccustomerAddlUrl = "http://localhost:8080/addcustomer/";

    public companyAddUrl = "http://localhost:8080/addcompany/";
    public companyGetAllUrl = "http://localhost:8080/companies/";

    public authUrl: string = "http://localhost:8080/auth/";

    

}

class ProductionConfig extends Config {
    public couponAddUrl = "http://localhost:8080/addcoupon/";
    public couponGetAllUrl = "http://localhost:8080/coupons/";

    public ccustomerGetAllUrl = "http://localhost:8080/customers/";
    public ccustomerAddlUrl = "http://localhost:8080/addcustomer/";

    public companyAddUrl = "http://localhost:8080/addcompany/";
    public companyGetAllUrl = "http://localhost:8080/companies/";

    public authUrl: string = "http://localhost:8080/auth/";

    

}

const appConfig = process.env.NODE_ENV === "development" ? new DevConfig() :
    process.env.NODE_ENV === "test" ? new TestingConfig() : new ProductionConfig();

export default appConfig; 