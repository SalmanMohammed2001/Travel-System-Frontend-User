import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../service/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService:UserService) {
  }

  form=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  login(){
  this.userService.login(
    this.form.get('email')?.value!,
    this.form.get('password')?.value!,
  ).subscribe(res=>{
    console.log(res)
  })
  }
}
