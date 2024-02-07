import {Component, OnInit} from '@angular/core';
import {DetailsService} from "../../../../service/dataSet/details.service";
import {AuthService} from "../../../../service/auth/Auth.service";
import {UserService} from "../../../../service/user/user.service";
import {PackageService} from "../../../../service/pacage/package.service";
import {BookingService} from "../../../../service/booking/booking.service";
import {Router} from "@angular/router";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit{

  constructor( private authService: AuthService,private userService:UserService,
              private bookingService:BookingService,
              private router:Router
  ) {
  }

  email:any
  token:any

  ngOnInit(): void {
    this.token= this.authService.getCookies("myToken")
    this.email=this.getEmailFromToken(this.token)

    this.findUser();
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
    //  console.log(res[0].userId)
      this.findByBookingUser(res[0].userId)
    })
  }

  bookingArrayList:any=[]
  findByBookingUser(id:any){
    this.bookingService.findByUserID(id).subscribe(res=>{
      this.bookingArrayList=res.data
    })
  }




}
