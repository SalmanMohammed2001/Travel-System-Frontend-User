import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor() { }

  packageId:any

  setPackageId(data:any){
    this.packageId=data
  }
  getPackageId(){
    return this.packageId
  }

}
