import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private  http:HttpClient) {
  }
  findAll():Observable<any>{
    return this.http.get<any>('http://localhost:8081/api/v1/hotel')
  }
  findId(id:any):Observable<any>{
    return  this.http.get('http://localhost:8081/api/v1/hotel/'+id)
  }

}