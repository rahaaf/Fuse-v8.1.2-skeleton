import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentusComponent } from './contentus.component';
import { MaterialModule } from 'app/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  { path: '' ,
  component:ContentusComponent
}
];

@NgModule({
  declarations: [ContentusComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)

  ]
})
export class ContentusModule { }
