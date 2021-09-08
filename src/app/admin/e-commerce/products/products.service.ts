import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class EcommerceProductsService 
{
    products: any[]= [];
    onProductsChanged: BehaviorSubject<any>;
    productArray

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _angularFireStor: AngularFirestore,
    )
    {
        // Set the defaults
        this.onProductsChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
    //  */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
               this.getProducts()
            ]).then(
                () => {
                    resolve( true);
                },
                reject
            );
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
   getProducts(){
    this._angularFireStor.collection("products").snapshotChanges().subscribe((product)=>{
        this.products = product.map(element =>{
            let ob =element.payload.doc.data();
            return {
                id: element.payload.doc.id,
                item: ob['productname'],
                description: ob['description'],
                category: ob['category'],
                tags: ob['tags'],
                image: ob['image'],
                price: ob['price'],
                quantity:ob['quantity'],
                weight:ob['weight'],
                uid :ob['uid'],
            }
        })
        this.onProductsChanged.next(this.products);
    })
   }
}
