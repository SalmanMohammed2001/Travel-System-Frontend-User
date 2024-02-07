import {NgModule, OnInit} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';
import {AuthService} from "../../service/auth/Auth.service";
import {SaveBookingComponent} from "./components/save-booking/save-booking.component";
import {UpdateBookingComponent} from "./components/update-booking/update-booking.component";
import {BookingDetailsComponent} from "./components/booking-details/booking-details.component";

const routes: Routes = [
  { path: '', component: ConsoleComponent ,children:[
      {path:'',redirectTo:'/console/save',pathMatch:'full'},
      {path:'save',component:SaveBookingComponent},
      {path:'update/:id',component:UpdateBookingComponent},
      {path:'view',component:BookingDetailsComponent},
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule {}
