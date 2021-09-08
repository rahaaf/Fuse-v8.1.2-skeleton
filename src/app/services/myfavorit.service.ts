import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'app/prudects/products.service';
import {  IFavorit } from "app/models/IFavorite";
import { BehaviorSubject, Observable } from "rxjs";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IProduct } from "app/models/IProduct";
import { fadeInItems } from "@angular/material/menu";


@Injectable({
    providedIn: 'root'
  })
  export class MyFavoritService implements Resolve<any> {

    favorit : any[] = [];
   
    favorite: IFavorit = {image:'', price:0, productname : ''};
    favoriteSubject: BehaviorSubject<any>;
    onFavChanged: Observable<any>;



   constructor( private afs : AngularFirestore,private ps : ProductsService){

    this.favoriteSubject = new BehaviorSubject<IFavorit>(this.favorite);
    this.onFavChanged = this.favoriteSubject.asObservable();

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
               this.getFavorite()
           ]).then(
               () => {
                   resolve(true);
               },
               reject
           );
       });
   }

   addToFavorite( obj : IProduct){
     this.favorite.image = obj.image;
     this.favorite.price = obj.price;
     this.favorite.productname = obj.productname;
     this.favoriteSubject.next(this.favorite)
     console.log(this.favoriteSubject.next(this.favorite));
     
   }

    myFavorite( items : IFavorit[]){
       
        

         return new Promise((resolve, reject) => {
             this.afs.collection('/favorite').add(items).then(data => {
                 console.log(data);
                 resolve(true);
             }, err=>
              {console.log(err);}
             ),reject()
    
                 });
    
      }
      
    
   
      getFavorite(){
   
        this.afs.collection("favorite")
        .snapshotChanges().subscribe((fav)=>{
            this.favorit =    fav.map(element =>{
                 return element.payload.doc.data();
              
            })
          console.log(this.favorit);
    
    
        })
       }

  }