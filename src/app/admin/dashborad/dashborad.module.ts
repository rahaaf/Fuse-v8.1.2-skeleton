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
    {
      path: 'users', loadChildren: () =>
          import('../contacts/contacts.module').then((u) => u.ContactsModule)
    },
    {
      path: 'store', loadChildren: () =>
          import('../stor/stor.module').then((s) => s.StorModule)
    },
    {
      path: 'blogs', loadChildren: () =>
          import('../blogs/blogs/blogs.module').then((b) => b.BlogsModule)
    },
  ]
},

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
