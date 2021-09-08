import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/material/material.module';
import { StorComponent } from './stor/stor.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StorService } from './stor/stor.service';
import { StorsComponent } from './stors/stors.component';
import { StorsService } from './stors/stors.service';
import { FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

const routes: Routes =[
{
  path     : 'stors',
  component: StorsComponent,
  resolve  : {
      data: StorsService
  }
},
{
  path     : 'stors/:id',
  component: StorComponent,
 
},
{
  path: 'stors/:id/:handle',
  component: StorComponent,
 
},
]


@NgModule({
  declarations: [
    StorComponent,
    StorsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    FuseWidgetModule
  ],
  providers:[
    StorService,
    StorsService,
  ],
})
export class StorModule { }
