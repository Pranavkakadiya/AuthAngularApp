import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {
    path: 'double', children: [
      { path: 'admin', component: AdminloginComponent },
      { path: 'list', component: ListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubleRoutingModule { }
