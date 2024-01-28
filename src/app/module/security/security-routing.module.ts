import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LoginComponent} from "./inner-item/login/login.component";
import {SignupComponent} from "./inner-item/signup/signup.component";
import {LoginHeaderComponent} from "./inner-item/login-header/login-header.component";
import {VerificationComponent} from "./inner-item/verification/verification.component";

const routes: Routes = [
  { path: '', component: SecurityComponent ,children:[
    {path:"",redirectTo:"/security/login",pathMatch:'full'},
      {path:"login",component:LoginComponent},
      {path:"signup",component:SignupComponent},
      {path:"verify/:email",component:VerificationComponent},
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
