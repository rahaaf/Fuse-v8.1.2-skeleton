import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { EcommerceOrderComponent } from './order/order.component';
import { EcommerceOrderService } from './order/order.service';
import { EcommerceOrdersComponent } from './orders/orders.component';
import { EcommerceOrdersService } from './orders/orders.service';
import { MaterialModule } from 'app/material/material.module';
import { MyfavoriteComponent } from './MyFavorite/myfavorite/myfavorite.component';
import { MyFavoritService } from 'app/services/myfavorit.service';


const routes: Routes = [

    {
        path: 'orders',
        component: EcommerceOrdersComponent,
        resolve: {
            data: EcommerceOrdersService
        }
    },
    {
        path: 'orders/:id',
        component: EcommerceOrderComponent,
        resolve: {
            data: EcommerceOrderService
        }
    },
    {
        path: 'myfavorite',
        component: MyfavoriteComponent,
        resolve: {
            data: MyFavoritService
        }
    },

];


@NgModule({
    declarations: [
        EcommerceOrdersComponent,
        EcommerceOrderComponent,
        MyfavoriteComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        NgxChartsModule,
        FuseSharedModule,
        FuseWidgetModule
    ],
    providers: [
        EcommerceOrdersService,
        EcommerceOrderService
    ]
})
export class EcommerceModule {
}
