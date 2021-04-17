import {AuthService} from './auth.service';
import {HTTP_INTERCEPTORS, HttpInterceptor, HttpEvent, HttpResponse,} from '@angular/common/http';
import { Injectable } from '@angular/core';


//import map
import {map} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{


    constructor(private _authService:AuthService){}

    intercept(req: import("@angular/common/http/http").HttpRequest<any>, next: import("@angular/common/http/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http/http").HttpEvent<any>> {
        // throw new Error("Method not implemented.");

        this._authService.isLoding.next(true);

        const authToken=this._authService.getAccessToken();
        req=req.clone({
            setHeaders:{
                Authorization :'Bearer '+authToken
            }
        });
        return next.handle(req).pipe(
            map((event:HttpEvent<any>)=>{
                if(event instanceof HttpResponse)
                {
                    console.log("response")
                    this._authService.isLoding.next(false)
                }
                return event;
            })
        );

    }


}