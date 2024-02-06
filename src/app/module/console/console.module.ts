import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { SaveBookingComponent } from './save-booking/save-booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    SaveBookingComponent,
    BookingDetailsComponent,
    UpdateBookingComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
