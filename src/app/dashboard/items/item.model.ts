export class Item{
    public _id: number;
    public name: string;
    public price: number;
    public createdAt: Date;
    public updatedAt: Date;
    public sellerName: string;
  constructor(id:number, name:string, price:number, createdAt:Date,updatedAt:Date,sellerName:string)
  {
    this._id=id;
    this.name=name;
    this.price=price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.sellerName = sellerName;
  }
}
