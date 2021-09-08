import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'app/prudects/products.service';
import { Observable } from 'rxjs';
import { MyFavoritService } from 'app/services/myfavorit.service';

@Component({
  selector: 'app-myfavorite',
  templateUrl: './myfavorite.component.html',
  styleUrls: ['./myfavorite.component.scss']
})
export class MyfavoriteComponent implements OnInit {

  favorite: any[]=[];

  constructor(
    private mfs: MyFavoritService
    ) { }


 

  ngOnInit(): void {

    this.mfs.favoriteSubject.subscribe(data=>{
      this.favorite=data;
       console.log(data);
       
    }) 
  }

 


}
