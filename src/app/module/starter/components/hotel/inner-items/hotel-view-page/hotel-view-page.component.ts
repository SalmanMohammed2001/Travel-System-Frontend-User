import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hotel-view-page',
  templateUrl: './hotel-view-page.component.html',
  styleUrls: ['./hotel-view-page.component.scss']
})
export class HotelViewPageComponent implements  OnInit{

  constructor(private  activateRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(res=>{
      let id=res.get('id')
      console.log(id)
    })
  }


}
