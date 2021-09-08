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
    }
];

@NgModule({
    declarations: [
       
        EcommerceOrdersComponent,
        EcommerceOrderComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        NgxChartsModule,
        FuseSharedModule,
        FuseWidgetModule,
    ],
    providers: [
        EcommerceOrdersService,
        EcommerceOrderService
    ]
})
export class EcommerceModule {
}
