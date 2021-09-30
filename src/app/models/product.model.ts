export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export class Product {
  id: number | undefined ;
  name: string | undefined;
  price: number | undefined;  

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}