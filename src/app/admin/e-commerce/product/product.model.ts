import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

import { IProduct } from 'app/models/IProduct'
import { Url } from 'node:url';

export class Product implements  IProduct
{
    uid: string;
    productname: string;
    description: string;
    category: string;
    tags: string[];
    image: string;
    price: number;
    weight: string;
    quantity:boolean;
    active: boolean;

    /**
     * Constructor
     *
     * @param product
     */
    constructor(product?)
    {
        product = product || {};
        this.uid = product.uid || FuseUtils.generateGUID();
        this.productname = product.productname || '';
        this.description = product.description || '';
        this.category = product.category || '';
        this.tags = product.tags || [];
        this.image = product.image ||'';
        this.price = product.price || 0;
        this.quantity = product.quantity || true;
        this.weight = product.weight || 0;
        this.active = product.active || true;
    }


    /**
     * Add tag
     *
     * @param {MatChipInputEvent} event
     */
    addTag(event: MatChipInputEvent): void
    {
        const input = event.input;
        const value = event.value;

        // Add tag
        if ( value )
        {
            this.tags.push(value);
        }

        // Reset the input value
        if ( input )
        {
            input.value = '';
        }
    }

    /**
     * Remove tag
     *
     * @param tag
     */
    removeTag(tag): void
    {
        const index = this.tags.indexOf(tag);

        if ( index >= 0 )
        {
            this.tags.splice(index, 1);
        }
    }
}
