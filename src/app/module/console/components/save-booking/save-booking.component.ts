import {Component, OnInit} from '@angular/core';
import {DetailsService} from "../../../../service/dataSet/details.service";
import {AuthService} from "../../../../service/auth/Auth.service";
import {jwtDecode} from "jwt-decode";
import {UserService} from "../../../../service/user/user.service";
import {PackageService} from "../../../../service/pacage/package.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookingService} from "../../../../service/booking/booking.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-save-booking',
  templateUrl: './save-booking.component.html',
  styleUrls: ['./save-booking.component.scss']
})
export class SaveBookingComponent implements OnInit {
  constructor(private detailService: DetailsService, private authService: AuthService,private userService:UserService,
              private packageService:PackageService,
              private bookingService:BookingService,
              private router:Router
              ) {
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
      this.form.patchValue({
        customerEmail:res[0].email,
        customerId: res[0].userId,
        customerName: res[0].username,
        customerContact: res[0].contact.contact1,
        customerAddress: res[0].address,

      })
    })
  }

  findPackage(){
    this.packageService.findId(this.packageId).subscribe(res=>{
      console.log(res.data)
      this.form.patchValue({
        packageId: res.data[0].packageId,
        packageCategory: res.data[0].category,
        packageStartDate: res.data[0].travelDuration.startDate,
        packageEndDate: res.data[0].travelDuration.endDate,
        packageValue: res.data[0].packageValue
      })
    })
  }


  bankSlip(event: any) {
    const file = event.target.files[0]
    this.form.patchValue({
      bankSlip: file
    })
  }


  form = new FormGroup({
    customerEmail: new FormControl('', [Validators.required]),
    customerId: new FormControl('', [Validators.required]),
    customerName: new FormControl('', [Validators.required]),
    customerContact: new FormControl('', [Validators.required]),
    customerAddress: new FormControl('', [Validators.required]),
    packageId: new FormControl('', [Validators.required]),
    packageCategory: new FormControl('', [Validators.required]),
    packageStartDate: new FormControl('', [Validators.required]),
    packageEndDate: new FormControl('', [Validators.required]),
    packageValue: new FormControl('', [Validators.required]),
    bankSlip: new FormControl('', [Validators.required]),

  })


  pk_Id=''
  pk_category = '';
  st_date = '';
  ed_date = ''
  pk_value = 0

  cartArray: any[] = []

  addToCart() {

    let tempCardObject = {
      packageId: this.pk_Id,
      packageCategory: this.pk_category,
      packageStartDate: this.st_date,
      packageEndDate: this.ed_date,
      packageValue: this.pk_value

    }

    let rows = this.isExist(tempCardObject.packageId)
    if (rows != -1) {
      alert('al ready exist')
      return
    } else {
      this.cartArray.push(tempCardObject)

    }

  }


  isExist(data: any) {
    for (let i = 0; i < this.cartArray.length; i++) {
      if (this.cartArray[i].packageId === data) {
        return i
      }
    }
    return -1

  }

  /*  total=0
    setTotal(){
      this.cartArray.forEach(data=>{
        this.total+=data.packageValue
      })

    }*/

  remove(data: any) {
    for (let i = 0; i < this.cartArray.length; i++) {
      if (this.cartArray[i].packageId == data) {
        this.cartArray.splice(i, 1);
      }

    }
  }

  createData() {
    let customerId = this.form.get('customerId')?.value;
    let customerEmail = this.form.get('customerEmail')?.value;
    let customerName = this.form.get('customerName')?.value;
    let customerContact = this.form.get('customerContact')?.value;
    let customerAddress = this.form.get('customerAddress')?.value;
    let packageId = this.form.get('packageId')?.value;
    let packageCategory = this.form.get('packageCategory')?.value;
    let packageStartDate = this.form.get('packageStartDate')?.value;
    let packageEndDate = this.form.get('packageEndDate')?.value;
    let packagePrice = this.form.get('packageValue')?.value;
    let bankSlipData = this.form.get('bankSlip')?.value;


    let total: number = 0;
    this.cartArray.forEach(data => {
      total += data.packageValue
    })


    let setData = new FormData();
    // @ts-ignore
    setData.append('bookingPrice', total!);
    // setData.append('bookingDate',   new Date().toLocaleDateString());
    setData.append('bookingDate',   new Date().toLocaleDateString());
    setData.append('bankSlip', bankSlipData!);
    setData.append('user', customerId!);
    setData.append('bookingDetails',JSON.stringify(this.cartArray))


    this.bookingService.create(setData).subscribe(res => {
      alert('save')
      this.router.navigateByUrl("/")
    })


  }



}
