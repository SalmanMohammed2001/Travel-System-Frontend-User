import {Component, OnInit} from '@angular/core';
import {DetailsService} from "../../../../service/dataSet/details.service";
import {AuthService} from "../../../../service/auth/Auth.service";
import {jwtDecode} from "jwt-decode";
import {UserService} from "../../../../service/user/user.service";
import {PackageService} from "../../../../service/pacage/package.service";

@Component({
  selector: 'app-save-booking',
  templateUrl: './save-booking.component.html',
  styleUrls: ['./save-booking.component.scss']
})
export class SaveBookingComponent implements OnInit {
  constructor(private detailService: DetailsService, private authService: AuthService,private userService:UserService,
              private packageService:PackageService) {
  }

  token:any
  email:any
  packageId:any
  ngOnInit(): void {
    this.detailService.data$.subscribe(data => {
      this.packageId=data
    });
    this.token= this.authService.getCookies("myToken")

    this.email=this.getEmailFromToken(this.token)

    this.findUser()
    this.findPackage()

  }



  getEmailFromToken(token: string): string | null {
    try {
      const decoded: any = jwtDecode(token);
      return decoded.sub;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }


  findUser(){
    this.userService.findEmail(this.email).subscribe(res=>{
      console.log(res)
    })
  }

  findPackage(){
    this.packageService.findId(this.packageId).subscribe(res=>{
      console.log(res.data)
    })
  }


}
