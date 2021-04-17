import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';



@NgModule({
  declarations: [
    User1Component,
    User2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    User1Component,
    User2Component
  ]
})
export class UsersModule { }
