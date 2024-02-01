import {NgModule, OnInit} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';
import {AuthService} from "../../service/auth/Auth.service";

const routes: Routes = [{ path: '', component: ConsoleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule implements OnInit{

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
  }
}
