import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminloginComponent } from './adminlogin/adminlogin.component'
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'admin', component: AdminloginComponent },
      { path: 'list', component: ListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
