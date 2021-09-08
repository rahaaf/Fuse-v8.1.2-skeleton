import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from 'angularfire2/database';
import { reject } from 'lodash';


@Injectable()
export class EcommerceProductService implements Resolve<any>
{
    routeParams: any;
    product: any;
    onProductChanged: BehaviorSubject<any>;
    /////upload image
    private basePath = '/uploads';
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private _angularFireStor:AngularFirestore,
        private db: AngularFireDatabase
    )
    {
        // Set the defaults
        this.onProductChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProduct()
            ]).then(
                () => {
                    resolve(true);
                },
                reject
            );
        });
    }

    /**
     * Get product
     *
     * @returns {Promise<any>}
     */
    getProduct(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onProductChanged.next(false);
                resolve(false);
            }
            else
            {
                this._angularFireStor.collection("products").get(this.product);
                // this._httpClient.get('api/e-commerce-products/' + this.routeParams.id)
                //     .subscribe((response: any) => {
                //         this.product = response;
                //         this.onProductChanged.next(this.product);
                //         resolve(response);
                //     }, reject);
            }
        });
    }

    /**
     * Save product
     *
     * @param product
     * @returns {Promise<any>}
     */
    saveProduct(product): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._angularFireStor.collection('products').add(product).then(data => {
                console.log(data);
                resolve(true);
            }, err=>
             {console.log(err);}
            ),reject()
                 
                });
        
    }

    /**
     * Add product
     *
     * @param product
     * @returns {Promise<any>}
     * 
     */
   
}
