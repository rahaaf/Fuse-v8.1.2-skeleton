import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CartService } from 'app/services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { DialogContenComponent } from './dialog-conten/dialog-conten.component';


const appRoutes: Routes = [
  { path: '' ,
  component:CartComponent,
  resolve: {
    data: CartService
}
 
 }
]

@NgModule({
  declarations: [CartComponent, DialogContenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule

  ],
  exports: [
    CartComponent
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
