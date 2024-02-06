import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { SaveBookingComponent } from './components/save-booking/save-booking.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { HeadersComponent } from './components/headers/headers.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    SaveBookingComponent,
    BookingDetailsComponent,
    UpdateBookingComponent,
    HeadersComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
