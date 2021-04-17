import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
console.warn("admin module load")

@NgModule({
  declarations: [
    ListComponent,
    AdminloginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
