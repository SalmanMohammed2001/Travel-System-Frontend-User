import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {LoadingService} from "../service/loading/loading.service";
import {AuthService} from "../service/auth/Auth.service";

@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {

  constructor(private  loadingService:LoadingService,private authServices:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.loadingState.next(true)

    if(this.authServices.checkCookies('myToken')){
      request=request.clone({
        setHeaders:{Authorization:this.authServices.getCookies("myToken")}
      });

    }
    return next.handle(request).pipe(catchError(err=>{
        console.log(err)

      if(err.status===401 || err.status==403){
        alert("Unauthorized")

      }
        let error=err.message || err.statusText
        return throwError(error)
      }),finalize(()=>{
        this.loadingService.loadingState.next(false);
      })
    );
  }
}
