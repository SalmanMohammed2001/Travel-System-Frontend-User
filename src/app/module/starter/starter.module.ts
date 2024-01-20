import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './components/starter-header/starter-header.component';
import { StarterFooterComponent } from './components/starter-footer/starter-footer.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
