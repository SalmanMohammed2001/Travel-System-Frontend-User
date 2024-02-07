import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http:HttpClient) { }

  findAllPackage():Observable<any>{
    return this.http.get('http://localhost:8081/api/v1/packageDetails')

  }



  findAll():Observable<any>{
    return this.http.get<any>('http://localhost:8081/api/v1/packageDetails')
  }
  findId(id:any):Observable<any>{
    return  this.http.get('http://localhost:8081/api/v1/packageDetails/'+id)
  }

}
