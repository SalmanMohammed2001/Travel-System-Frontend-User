import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http:HttpClient) { }

  create(data:any){
    return this.http.post('http://localhost:8081/api/v1/booking',data)
  }

  findAll():Observable<any>{
    return  this.http.get<any>('http://localhost:8081/api/v1/booking')
  }
  findId(id:any):Observable<any>{
    return  this.http.get<any>('http://localhost:8081/api/v1/booking/'+id)

  }
  findCount():Observable<any>{
    return  this.http.get<any>('http://localhost:8081/api/v1/booking/count')
  }
  findByUserID(id:any):Observable<any>{
    return  this.http.get<any>('http://localhost:8081/api/v1/booking/user/'+id)
  }

  findUpdateId(id:any):Observable<any>{
    return  this.http.get<any>('http://localhost:8081/api/v1/booking/update/'+id)

  }

  update(data:any){
    return this.http.put('http://localhost:8081/api/v1/booking',data)
  }
  /* searchCustomer(searchText:any):Observable<any>{
     return this.http.get('http://localhost:8081/api/v1/users?text='+searchText)
   }
 */
  delete(id:any){
    return this.http.delete('http://localhost:8081/api/v1/booking/?id='+id)
  }


}
