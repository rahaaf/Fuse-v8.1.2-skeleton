import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

export class Stor
{
    id: string;
    nameOwner: string;
    handle: string;
    description: string;
    address: string;
    tags: string[];
    image: string;
    nameproduct: string;
    price: number;
    quantity:boolean;
    weight :string;
    active: boolean;


    /**
     * Constructor
     *
     * @param stor
     */
    constructor(stor?)
    {
        stor = stor || {};
        this.id = stor.id || FuseUtils.generateGUID();
        this.nameOwner = stor.nameOwner || '';
        this.handle = stor.handle || FuseUtils.handleize(this.nameOwner);
        this.description = stor.description || '';
        this.address = stor.adderss || '';
        this.tags = stor.tags || [];
        this.image = stor.image || '';
        this.nameproduct = stor.nameproduct || '';
        this.price = stor.price || 0;
        this.quantity = stor.quantity || true;
        this.weight = stor.weight || '';
        this.active = stor.active || true;
    }

    // /**
    //  * Add category
    //  *
    //  * @param {MatChipInputEvent} event
    //  */
    // addCategory(event: MatChipInputEvent): void
    // {
    //     const input = event.input;
    //     const value = event.value;

    //     // Add category
    //     if ( value )
    //     {
    //         this.category.push(value);
    //     }

    //     // Reset the input value
    //     if ( input )
    //     {
    //         input.value = '';
    //     }
    // }

    // /**
    //  * Remove category
    //  *
    //  * @param category
    //  */
    // removeCategory(category): void
    // {
    //     const index = this.category.indexOf(category);

    //     if ( index >= 0 )
    //     {
    //         this.category.splice(index, 1);
    //     }
    // }

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
