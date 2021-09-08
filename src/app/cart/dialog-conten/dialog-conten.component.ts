import { Component,OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-dialog-conten',
  templateUrl: './dialog-conten.component.html',
  styleUrls: ['./dialog-conten.component.scss']
})
export class DialogContenComponent implements OnInit {

  products: any[] = [];


  constructor( private cs : CartService) {}



  ngOnInit(): void {

   this.products = this.cs.cartSubject.value.items;
   this.cs.onCartChanged;
   console.log(this.cs.onCartChanged);
   

  }

    removeItem(item : any){
     
      this.cs.removeCart(item);
      console.log(item);
    }
 
   buy(){
    this.cs.buyProduct();

   }

}

