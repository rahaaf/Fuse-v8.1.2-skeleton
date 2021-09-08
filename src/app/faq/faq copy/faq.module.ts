import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

import { FaqService } from 'app/faq/faq copy/faq.service';
import { FaqComponent } from 'app/faq/faq copy/faq.component';
import { MaterialModule } from 'app/material/material.module';


const appRoutes: Routes = [
    { path: '' ,
      component: FaqComponent,
      resolve  : {
        faq: FaqService
    }
  }
];


@NgModule({
    declarations: [
        FaqComponent
    ],
    imports     : [
        RouterModule.forChild(appRoutes),

        MaterialModule,


        FuseSharedModule
    ],
    providers   : [
        FaqService
    ]
})
export class FaqModule
{
}
