import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from 'app/services/cart.service';
import { MyFavoritService } from 'app/services/myfavorit.service';
import { IFavorit } from 'app/models/IFavorite';


@Component({
  selector: 'app-prudects',
  templateUrl: './prudects.component.html',
  styleUrls: ['./prudects.component.scss']
})

export class PrudectsComponent implements OnInit{

 
  products: any[] = [] ;
  
  categories$;


  constructor(private _service: ProductsService,
     private cs : CartService,
     
     private _mfs: MyFavoritService,

  ) {


   }

  ngOnInit(): void {
  
    this._service.onProductsChanged.subscribe(data=>{
      this.products=data;
       console.log(data);
         this.getByCategory()
    }) 
     
     
  
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // ----------------------------------------------------------------------------------------------------
 

Addtocart(amount: number, productid: string,productname:string,price:number){

  console.log(amount,productid,productname,price);
  this.cs.Addtocart({productId:productid,amount:amount,productname:productname,price:price})
  
}

favorite(price: number , productname :string , image:string ,description:string,uid:string,category:string,tags:string[],quantity:boolean,weight:string){
  this._mfs.addToFavorite({productname:productname, price : price, image: image,description:description,uid:uid,category:category,tags:tags,quantity:quantity,weight:weight});
  console.log( this._mfs.addToFavorite({productname:productname, price : price, image: image,description:description,uid:uid,category:category,tags:tags,quantity:quantity,weight:weight}));
  
}

myFav(items : IFavorit[]){
  this._mfs.myFavorite(items);
  console.log(this._mfs.myFavorite(items));
  
}



getByCategory(){

  this._service.getByCategory()
}


}

