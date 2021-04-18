import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
import { User } from './user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Car } from './Car';

import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //mast ka kare chhe
  isLoding:BehaviorSubject<Boolean>=new BehaviorSubject<Boolean>(false);

  // _demoSubject: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false); 


  // url="https://authapiangular.herokuapp.com/api/";
  // urlop="https://crudapiangular.herokuapp.com/api/";
  url="http://localhost:5000/api/";
  // urlop="http://localhost:5000/api/";

  constructor(private _http:HttpClient,private _router:Router) { }


  //most useful
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };

  //reguistration signup
  register(user:User):Observable<any>{
    return this._http.post<any>(this.url+"register",user);
  }

  //login ama observable ni jrror na pade because ek vaar ama data avi jay to multiple data observer karvani jroor nathi
  login(user:User){
    return this._http.post<any>(this.url+"login",user).subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem("access-token",res.token);
      this._router.navigate(['/dashboard']);
    })
  }

  //islogin or not
  isLoggedIn():boolean{

    let authtoken=localStorage.getItem("access-token")
    
    return (authtoken)!=null ?true:false;
  }

  //logout()
  logout(){
    if(localStorage.removeItem("access-token")==null){
      this._router.navigate(['/login'])
    }
  }

  
  //gettokenfrom local storage
  getAccessToken(){
    return localStorage.getItem("access-token");
  }
  
 

  addcar(data:Car):Observable<Car>{
    return this._http.post<Car>(this.url+"cars",data);
  }


  getcar():Observable<any>{
    return this._http.get(this.url+"cars",this.httpOptions);
  }

  updatecar(data:Car):Observable<Car>{
    return this._http.patch<Car>(this.url+"cars/"+data._id,data)
  }

  deletecar(data:Car):Observable<Car>{
    return this._http.delete<Car>(this.url+"cars/"+data._id)
  }


}
