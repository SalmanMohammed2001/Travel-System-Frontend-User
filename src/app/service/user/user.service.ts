import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {data} from "autoprefixer";


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

  login(email:any,password:any):Observable<any>{
    return this.http.post("http://localhost:8081/login",{
      username:email,
      password:password
    },{
      observe:'response' as 'body'
    })
      .pipe(map(data=>{
        return data
      }))
  }

  findEmail(email:any):Observable<any>{
    return  this.http.get<any>('http://localhost:8081/api/v1/users/'+email)

  }

  findAll():Observable<any>{
    return  this.http.get<any>('http://localhost:8081/api/v1/users')

  }
}
