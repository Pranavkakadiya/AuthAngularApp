import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import {UserDataService}  from '../user-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup | any;
  name='';
  id="";

  constructor(private _authService:AuthService,private _router:Router,private data:UserDataService) { 
    this.loginForm=new FormGroup({
      uname:new FormControl(''),
      password:new FormControl('')
    })

    // console.log(this.data.getdata())
    // let datas=this.data.getdata();
    // this.name=datas.name;
  }
  
//changes 
  ngOnInit(): void {
    if(this._authService.isLoggedIn()!==true){
      // window.alert("access not allowed");
      this._router.navigate(['/login'])
    }else{
      this._router.navigate(['/dashboard'])
    }
  }

  loginUser(){
    this._authService.login(this.loginForm.value);
    // this.loginForm.reset();
    }
  }


