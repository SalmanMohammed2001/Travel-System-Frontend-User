import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './inner-item/login/login.component';
import { SignupComponent } from './inner-item/signup/signup.component';
import { LoginHeaderComponent } from './inner-item/login-header/login-header.component';
import {ReactiveFormsModule} from "@angular/forms";
import { VerificationComponent } from './inner-item/verification/verification.component';


@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    SignupComponent,
    LoginHeaderComponent,
    VerificationComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
