import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad/dashborad.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';


 
const appRoutes: Routes = [
  { path: '' ,
  component:DashboradComponent,
  children:[
    {
      path: 'e-commerce', loadChildren: () =>
          import('../e-commerce/e-commerce.module').then((o) => o.EcommerceModule)
    },
  ]
}

];

@NgModule({
  declarations: [
    DashboradComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(appRoutes),

  ],
})
export class DashboradModule { }
