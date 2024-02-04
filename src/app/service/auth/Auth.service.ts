import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService:CookieService) { }


    createToken(ket:string,token:string):void{
        this.cookieService.set(ket,token,{
          expires:90
        });
    }
    checkCookies(key:string):boolean{
    return this.cookieService.check(key)
    }

    getCookies(key:string){
   return  this.cookieService.get(key)
    }

    clearCookie(key:string){
    this.cookieService.delete(key)
    }
}
