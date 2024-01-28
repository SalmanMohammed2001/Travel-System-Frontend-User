import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  create(data:any){
   return this.http.post('http://localhost:8081/api/v1/users/visitor/register',data)
  }

  public verify(code:string,email:string):Observable<any>{
    return this.http.post('http://localhost:8081/api/v1/users/visitor/verify/'+code+'?email='+email,{})



  }
}
