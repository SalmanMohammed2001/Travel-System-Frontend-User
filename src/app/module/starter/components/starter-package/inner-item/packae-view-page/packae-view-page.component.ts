import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VehicleService} from "../../../../../../service/vehicle/vehicle.service";
import {PackageService} from "../../../../../../service/pacage/package.service";
import {HotelService} from "../../../../../../service/hotel/hotel.service";

@Component({
  selector: 'app-packae-view-page',
  templateUrl: './packae-view-page.component.html',
  styleUrls: ['./packae-view-page.component.scss']
})
export class PackaeViewPageComponent implements OnInit{

  constructor(private  activateRoute:ActivatedRoute, private packageService:PackageService,
             private hotelService:HotelService,
             private vehicleService:VehicleService,
  ) {
  }

  id:any
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(res=>{
      this.id=res.get('id')
      console.log(this.id)
    })

    this.findPackage()
  }

  packageArrayList:Array<any>=[]
  hotelId:any;
  vehicleId:any;
  findPackage(){
    this.packageService.findId(this.id).subscribe(res=>{
      this.packageArrayList=res.data
      this.hotelId=res.data[0].hotel.hotelId
      this.vehicleId=res.data[0].vehicle.vehicleId

      console.log(this.vehicleId)
      this.findHotel()
     this.findVehicle()
    })

  }

  hotelArray:Array<any>=[]
  findHotel(){
    console.log(this.hotelId)
   this.hotelService.findId(this.hotelId).subscribe(res=>{
      this.hotelArray=res.data
    })
  }

  vehicleArray:Array<any>=[]
  findVehicle(){
    console.log(this.hotelId)
    this.vehicleService.findById(this.vehicleId).subscribe(res=>{
      this.vehicleArray=res
      console.log(this.vehicleArray)
    })
  }

}
