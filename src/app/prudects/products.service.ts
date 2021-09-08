import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from 'app/models/IProduct';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements Resolve<any>  {
  products: any[] = [];
  categury: any[] = [];
  onProductsChanged: BehaviorSubject<any>;
  onCategoriesChanged: BehaviorSubject<any>;

  constructor(
    private _angularFireStor: AngularFirestore,
    private  _db : AngularFireDatabase
    ) {

      this.onProductsChanged = new BehaviorSubject({});
      this.onCategoriesChanged = new BehaviorSubject({});

     }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
               this.getProducts(),
               this.getByCategory()
            ]).then(
                () => {
                    resolve( true);
                },
                reject
            );
        });
    }
  // return 'asdsad'
 


  getProducts(){

// this._db.list('products/' , ref=> ref.orderByChild('category').equalTo('frutis')).snapshotChanges().subscribe(data=>{
//   console.log(data);

// }, err=> console.log(err)
// )
    this._angularFireStor.collection("products")
    .snapshotChanges().subscribe((product)=>{
        this.products = product.map(element =>{
            let ob =element.payload.doc.data();
            return {
                id: element.payload.doc.id,
                productname: ob['productname'],
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

       getByCategory(){

        // this._db.list('/products', ref => ref.orderByChild("category").equalTo("vegtables")).snapshotChanges().subscribe(data=>{
        //     console.log(data);
            
        // })

       }
}
