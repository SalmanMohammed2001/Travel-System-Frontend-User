import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './components/starter-header/starter-header.component';
import { StarterFooterComponent } from './components/starter-footer/starter-footer.component';
import { StarterHomeComponent } from './components/starter-home/starter-home.component';
import { MainSliderComponent } from './components/starter-home/inner-items/main-slider/main-slider.component';
import { MainAboutComponent } from './components/starter-home/inner-items/main-about/main-about.component';
import { MainIntroductionComponent } from './components/starter-home/inner-items/main-introduction/main-introduction.component';
import { MainServiceComponent } from './components/starter-home/inner-items/main-service/main-service.component';
import { MainCustomerReviewsComponent } from './components/starter-home/inner-items/main-customer-reviews/main-customer-reviews.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {SlickCarouselModule} from "ngx-slick-carousel";
import { MainSocialOuterComponent } from './components/starter-home/inner-items/main-social-outer/main-social-outer.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelViewPageComponent } from './components/hotel/inner-items/hotel-view-page/hotel-view-page.component';
import { StarterVehicleComponent } from './components/starter-vehicle/starter-vehicle.component';
import { VehicelViewPageComponent } from './components/starter-vehicle/inner-item/vehicel-view-page/vehicel-view-page.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    StarterHomeComponent,
    MainSliderComponent,
    MainAboutComponent,
    MainIntroductionComponent,
    MainServiceComponent,
    MainCustomerReviewsComponent,
    MainSocialOuterComponent,
    HotelComponent,
    HotelViewPageComponent,
    StarterVehicleComponent,
    VehicelViewPageComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule,
    CarouselModule,
    SlickCarouselModule,

  ]
})
export class StarterModule { }
