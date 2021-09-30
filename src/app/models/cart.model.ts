export interface ICart {
    items: Array<CartItem>;
    total: number;    
}

export class Cart {
    items: Array<CartItem>;
    total: number;    

    constructor() {
        this.items = [];
        this.total = 0;
    }
}

export class CartItem {
    productId: number;
    name: string;
    quantity: number;

    constructor(productId: number, name: string, quantity: number) {
        this.productId = productId;
        this.name = name;
        this.quantity = quantity;
    }
}