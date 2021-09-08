import { ICartItem } from "./ICart";
import { OrderStatus } from "./orderStatus";

export interface IOrders {
    id?: string;
    total: number;
    date?: string;
    customer: any;
    products:ICartItem[];
    status: OrderStatus;
    interfacingDetails?: any[];
} 