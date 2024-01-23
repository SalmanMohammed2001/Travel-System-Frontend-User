import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HotelService} from "../../../../../../service/hotel.service";
import {VehicleService} from "../../../../../../service/vehicle.service";

@Component({
  selector: 'app-vehicel-view-page',
  templateUrl: './vehicel-view-page.component.html',
  styleUrls: ['./vehicel-view-page.component.scss']
})
export class VehicelViewPageComponent  implements  OnInit{

  constructor(private  activateRoute:ActivatedRoute, private service:VehicleService) {
  }

  vehicleArrayList:Array<any>=[]

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(res=>{
      let id=res.get('id')
      console.log(id)
      this.service.findById(id).subscribe(res=>{
        this.vehicleArrayList=res
        console.log(this.vehicleArrayList)
      })
    })
  }


}
