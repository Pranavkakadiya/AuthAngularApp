import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoubleRoutingModule } from './double-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ListComponent } from './list/list.component';




@NgModule({
  declarations: [
    AdminloginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DoubleRoutingModule
  ]
})
export class DoubleModule { }
