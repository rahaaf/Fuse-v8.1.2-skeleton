import { FuseUtils } from '@fuse/utils';
import { ICartItem } from 'app/models/ICart';
import { IOrders } from 'app/models/IOrders';
import { OrderStatus } from 'app/models/orderStatus';


export class Order implements IOrders
{
    id: string;
    reference: string;
    subtotal: string;
    tax: string;
    discount: string;
    total: number;
    date: string;
    customer: any;
    products: ICartItem[];
    status: OrderStatus;
    payment: any;
    interfacingDetails: any[];

    /**
     * Constructor
     *
     * @param order
     */
    constructor(order?)
    {
        order = order || {};
        this.id = order.id || FuseUtils.generateGUID();
        // this.reference = order.reference || FuseUtils.generateGUID();
        this.total = order.total || 0;
        // this.date = order.date || '';
        this.customer = order.customer || {};
        this.products = order.products || [];
        this.status = order.status || {};
        // this.payment = order.payment || {};
        this.interfacingDetails = order.interfacingDetails || [];
    }
}
