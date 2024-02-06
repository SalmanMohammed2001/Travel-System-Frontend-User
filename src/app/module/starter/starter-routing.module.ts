import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import {StarterHomeComponent} from "./components/starter-home/starter-home.component";
import {HotelComponent} from "./components/hotel/hotel.component";
import {HotelViewPageComponent} from "./components/hotel/inner-items/hotel-view-page/hotel-view-page.component";
import {StarterVehicleComponent} from "./components/starter-vehicle/starter-vehicle.component";
import {
  VehicelViewPageComponent
} from "./components/starter-vehicle/inner-item/vehicel-view-page/vehicel-view-page.component";
import {StarterPackageComponent} from "./components/starter-package/starter-package.component";
import {
  PackaeViewPageComponent
} from "./components/starter-package/inner-item/packae-view-page/packae-view-page.component";

const routes: Routes = [
  { path: '', component: StarterComponent , children:[
      {path:'', redirectTo:'/home',pathMatch:'full'},
      {path:'home',component:StarterHomeComponent},
      {path:'hotel',component:HotelComponent},
      {path:'hotel/view/:id',component:HotelViewPageComponent},
      {path:'vehicle',component:StarterVehicleComponent},
      {path:'vehicle/view/:id',component:VehicelViewPageComponent},
      {path:'package',component:StarterPackageComponent},
      {path:'package/view/:id',component:PackaeViewPageComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
