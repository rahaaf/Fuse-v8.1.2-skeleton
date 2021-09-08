export interface ICart{

    items : ICartItem[];

}

export interface ICartItem{

    productId : string;
    productname: string;
    amount : number;
    price : number;

}
