import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpManagerInterceptor} from "./interceptor/http-manager.interceptor";
import {SharedModule} from "./module/shared/shared.module";
import {CookieService} from "ngx-cookie-service";
import { jwtDecode } from "jwt-decode";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,


  ],
  providers: [
    CookieService,
    {provide:HTTP_INTERCEPTORS,useClass:HttpManagerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
