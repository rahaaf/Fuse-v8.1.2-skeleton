import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from '../blogs.component';

const routes: Routes =[
  {
    path     : 'bloge',
    component: BlogsComponent,
  },
]

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class BlogsModule { }
