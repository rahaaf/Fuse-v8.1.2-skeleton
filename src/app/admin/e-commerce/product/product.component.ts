import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { EcommerceProductService } from './product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { IProduct } from 'app/models/IProduct'
import { Product } from 'app/store-manag/e-commerce/product/product.model';
import { AuthService } from 'app/services/auth.service';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { url } from 'node:inspector';


@Component({
    selector: 'e-commerce-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class EcommerceProductComponent implements OnInit, OnDestroy {
    [x: string]: any;
    pageType: string;
    productForm: FormGroup;
    successMessage = ''
    ProductsRef: AngularFirestoreCollection<IProduct>;
    Product: Observable<IProduct[]>;
    task: AngularFireUploadTask
    ref:AngularFireStorageReference
    ////load image
    selectedFile: File = null;
    downloadURL: Observable<string>;




    successMsg = 'Data successfully saved.';
    data: IProduct;

    user: any;
   Uid

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EcommerceProductService} _ecommerceProductService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _ecommerceProductService: EcommerceProductService,
        private _formBuilder: FormBuilder,
        private _angularFireStor: AngularFirestore,
        private _authservice :AuthService,
        private afStorage: AngularFireStorage
    ) {
        // Set the default
        this._authservice.user.subscribe(user=>{
            this.Uid=user.uid;
        })
        // Set the private defaults
        this._unsubscribeAll = new Subject();

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to update product on changes
        this._ecommerceProductService.onProductChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(product => {

                if (product) {
                    this.product = new Product(product);
                    this.pageType = 'edit';
                }
                else {
                    this.pageType = 'new';
                    this.product = new Product();
                }

                this.productForm = this.createProductForm();
            });
    }
     
    uploadImage(event) {
        const id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id)
        this.task=this.ref.put(event.target.files[0])
        this.task.then((data)=>{
            data.ref.getDownloadURL().then(url=>{
                console.log(url);
                this.productForm.get('image').setValue(url);
                // this._angularFireStor.collection("products").add({
                   
                //         image:url
                
                // })
            })
        })
     }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create product form
     *
     * @returns {FormGroup}
     */
    createProductForm(): FormGroup {
        console.log(this.product);

        return this._formBuilder.group({
            // uid        : [this.product.uid],
            productname: [this.product.productname],
            description: [this.product.description],
            category: [this.product.category],
            tags: [this.product.tags],
            image: [this.product.image],
            price: [this.product.price],
            quantity: [this.product.quantity],
            weight: [this.product.weight],
            active: [this.product.active]
        });
    }

    /**
     * Save product
     */
    saveProduct(): void {

        const product = this.productForm.value;
        console.log(product);

        this._angularFireStor.collection('products').add(product).then(data => {
            console.log(data);
            
        }, err=>
        {console.log(err);}
        )
        const data = this.productForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._ecommerceProductService.saveProduct(data)
            .then(() => {

                // Trigger the subscription with new data
                this._ecommerceProductService.onProductChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Product saved', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            });
    }

    /**
     * Add product
     */

    addproduct() {

        const product = this.productForm.value;
        console.log(product);

        this._angularFireStor.collection('products').add({
            productname:product.productname,
            description:product.description,
            category:product.category,
            tags:product.tags,
            image:product.image,
            price:product.price,
            quantity:product.quantity,
            weight:product.weight,
          //  uid:product.uid,

        }).then(data => {
            console.log(data);

        }, err=>
        {console.log(err);}
        )
        
    }

}


