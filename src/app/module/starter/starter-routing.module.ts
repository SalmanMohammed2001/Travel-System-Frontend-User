import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import {StarterHomeComponent} from "./components/starter-home/starter-home.component";
import {HotelComponent} from "./components/hotel/hotel.component";
import {HotelViewPageComponent} from "./components/hotel/inner-items/hotel-view-page/hotel-view-page.component";

const routes: Routes = [
  { path: '', component: StarterComponent , children:[
      {path:'', redirectTo:'/home',pathMatch:'full'},
      {path:'home',component:StarterHomeComponent},
      {path:'hotel',component:HotelComponent},
      {path:'hotel/view/:id',component:HotelViewPageComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
