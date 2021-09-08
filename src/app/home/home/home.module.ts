import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'app/home/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MaterialModule } from 'app/material/material.module';
import { FuseHighlightModule } from '@fuse/components';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeService } from './home.service';

const appRoutes: Routes = [
  { 
    path: '' ,
    component: HomeComponent , 
    resolve : {service : HomeService}
  }
];

@NgModule({

  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IvyCarouselModule,
    MaterialModule,
    FuseHighlightModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(appRoutes),

  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
