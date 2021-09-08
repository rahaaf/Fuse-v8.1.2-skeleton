import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetpassComponent } from './forgetpass.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/material/material.module';

const appRoutes: Routes = [
  { 
    path: 'forgetpass' ,
    component:ForgetpassComponent
},
 
];


@NgModule({
  declarations: [ForgetpassComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class ForgetpassModule { }
