import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../../../service/hotel/hotel.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent  implements OnInit{

  constructor(private service:HotelService) {
  }
  ngOnInit(): void {
    this.findAll()
  }

  hotelArrayList:Array<any>=[]
  findAll(){
    this.service.findAll().subscribe(res=>{
      this.hotelArrayList=res.data
      console.log(this.hotelArrayList)
      this.hotelArrayList.forEach((data)=>{
      })
    })
  }


}
