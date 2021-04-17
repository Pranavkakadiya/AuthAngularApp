import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup | any;

  constructor(private _authService:AuthService,private _router:Router) { 
    this.registerForm=new FormGroup({
      uname:new FormControl(''),
      password:new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  registerUser(){
    this._authService.register(this.registerForm.value).subscribe(res=>{
      console.log(res);
      this.registerForm.reset()
      this._router.navigate(['/login']);
    })
  }

}
