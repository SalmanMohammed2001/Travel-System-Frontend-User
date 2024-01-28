import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  create(data:any){
   return this.http.post('http://localhost:8081/api/v1/users/visitor/register',data)
  }
}
