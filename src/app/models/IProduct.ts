import { Url } from "node:url";

export interface IProduct {
    productname:string,
    description:string,
    category:string,
    tags:string[],
    image:string,
    price:number,
    quantity:boolean,
    weight:string,
    uid:string,
} 