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


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    StarterHomeComponent,
    MainSliderComponent,
    MainAboutComponent,
    MainIntroductionComponent,
    MainServiceComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
