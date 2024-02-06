import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  constructor() { }



  setPackageId(data:any){
    this.dataSubject.next(data)
  }
/*  getPackageId(){
    return this.packageId
  }*/

}
