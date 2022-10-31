import { CompanyModel } from "./CompanyModel";

const company = CompanyModel.arguments

class CouponModel {
    public id: number;
    public title: string;
    public description: string;
    public category: string;
    public startDate: Date;
    public endDate: Date;
    public price: number;
    public amount: number;
    public image: string;
    public company: number;


    constructor(id: number, 
        title: string,
        description: string, 
        category: string, 
        startDate: Date, 
        endDate: Date, 
        price: number, 
        amount: number, 
        image: string,
        company: number) {
        
        
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.startDate = startDate;
        this.endDate = endDate;
        this.price = price;
        this.amount = amount;
        this.image = image;
        this.company = company;

    }
}

export default CouponModel;