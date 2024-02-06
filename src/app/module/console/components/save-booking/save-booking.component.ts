import {Component, OnInit} from '@angular/core';
import {DetailsService} from "../../../../service/dataSet/details.service";
import {AuthService} from "../../../../service/auth/Auth.service";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-save-booking',
  templateUrl: './save-booking.component.html',
  styleUrls: ['./save-booking.component.scss']
})
export class SaveBookingComponent implements OnInit {
  constructor(private detailService: DetailsService, private authService: AuthService) {
  }

  token:any
  email:any
  ngOnInit(): void {
    this.detailService.data$.subscribe(data => {
      console.log(data)
    });
    this.token= this.authService.getCookies("myToken")
    console.log(this.token)
    this.email=this.getEmailFromToken(this.token)
    console.log(this.email)
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

}
