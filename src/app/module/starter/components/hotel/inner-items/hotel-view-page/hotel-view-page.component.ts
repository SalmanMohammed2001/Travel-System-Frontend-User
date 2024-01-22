import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HotelService} from "../../../../../../service/hotel.service";

@Component({
  selector: 'app-hotel-view-page',
  templateUrl: './hotel-view-page.component.html',
  styleUrls: ['./hotel-view-page.component.scss']
})
export class HotelViewPageComponent implements  OnInit{

  constructor(private  activateRoute:ActivatedRoute, private service:HotelService) {
  }

  hotelArrayList:Array<any>=[]

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(res=>{
      let id=res.get('id')
      console.log(id)
      this.service.findId(id).subscribe(res=>{
        this.hotelArrayList=res.data
        console.log(this.hotelArrayList)
      })
    })
  }


}
