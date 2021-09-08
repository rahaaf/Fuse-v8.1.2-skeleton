import { Component, OnInit } from '@angular/core';
import { ICart } from 'app/models/ICart';
import { CartService } from 'app/services/cart.service';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { DialogContenComponent } from './dialog-conten/dialog-conten.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Observable <ICart>;
  product : any;

  grandTotal : number = 0;
  constructor(private cs : CartService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cart = this.cs.onCartChanged;
    this.cs.getproduct().subscribe(data =>{
      this.product = data;
      this.grandTotal = this.cs.getTotalPrice();
    })

  }

  openDialog() {
    
    const dialogRef = this.dialog.open(DialogContenComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

