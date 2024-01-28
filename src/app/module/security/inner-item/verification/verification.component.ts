import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../service/user/user.service";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit{
  constructor(private  selectedRoute:ActivatedRoute,private userService:UserService,private router:Router) {
  }

  email=''
  ngOnInit(): void {
    this.selectedRoute.paramMap.subscribe(res=>{
      this.email=  res.get("email")!
    })
    }



  verificationForm=new FormGroup({
    code:new FormControl('',[Validators.required])
  })

  verify(){
    if(!this.email){
      alert('wrong input')
      return
    }
    let observable = this.userService.verify(this.verificationForm.get('code')?.value!,this.email);observable.subscribe(resp=>{
      alert('verification success')
      this.router.navigateByUrl('/security/login').then()
    })




  }
}
