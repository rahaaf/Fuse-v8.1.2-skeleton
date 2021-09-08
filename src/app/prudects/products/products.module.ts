import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FuseSidebarModule } from '@fuse/components';
import { PrudectsComponent } from 'app/prudects/prudects.component';
import { MaterialModule } from 'app/material/material.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProductsService } from '../products.service';


const appRoutes: Routes = [
  {
    path: '',
    resolve: { service: ProductsService },
    component: PrudectsComponent,

  }

];


@NgModule({
  declarations: [PrudectsComponent],
  imports: [
    CommonModule,
    FuseSidebarModule,
    MaterialModule,
    RouterModule,
    FuseSharedModule,
    FuseDemoModule,
    IvyCarouselModule,
    RouterModule.forChild(appRoutes),

  ],
  providers: [ProductsService]
})
export class ProductsModule { }
