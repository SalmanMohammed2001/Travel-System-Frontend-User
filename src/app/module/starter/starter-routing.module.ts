import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import {StarterHomeComponent} from "./components/starter-home/starter-home.component";

const routes: Routes = [
  { path: '', component: StarterComponent , children:[
      {path:'', redirectTo:'/home',pathMatch:'full'},
      {path:'home',component:StarterHomeComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
