import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../../../service/hotel.service";
import {VehicleService} from "../../../../service/vehicle.service";

@Component({
  selector: 'app-starter-vehicle',
  templateUrl: './starter-vehicle.component.html',
  styleUrls: ['./starter-vehicle.component.scss']
})
export class StarterVehicleComponent   implements OnInit{

  constructor(private service:VehicleService) {
  }
  ngOnInit(): void {
    this.findAll()
  }

  vehicleArrayList:Array<any>=[]
  findAll(){
    this.service.findAll().subscribe(res=>{
      this.vehicleArrayList=res.data
      console.log(this.vehicleArrayList)
    })
  }

}