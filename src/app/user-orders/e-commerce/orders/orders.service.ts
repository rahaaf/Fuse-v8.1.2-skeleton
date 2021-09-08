import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class EcommerceOrdersService implements Resolve<any>
{
    orders: any[] = [];
    onOrdersChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * 
     */
    constructor(
     private afs : AngularFirestore
    )
    {
        // Set the defaults
        this.onOrdersChanged = new BehaviorSubject({});
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
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getOrders()
            ]).then(
                () => {
                    resolve(true);
                },
                reject
            );
        });
    }

    /**
     * Get orders
     *
     * @returns {Promise<any>}
     */
     getOrders(){
   
        this.afs.collection("orders")
        .snapshotChanges().subscribe((product)=>{
          this.orders = product.map(element =>{
                 return element.payload.doc.data();
              
            })
          console.log(this.orders);
    
    
        })
       }
}
