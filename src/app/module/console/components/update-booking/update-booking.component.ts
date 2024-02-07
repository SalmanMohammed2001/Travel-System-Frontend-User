import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/Auth.service";
import {UserService} from "../../../../service/user/user.service";
import {BookingService} from "../../../../service/booking/booking.service";
import {jwtDecode} from "jwt-decode";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PackageService} from "../../../../service/pacage/package.service";

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.scss']
})
export class UpdateBookingComponent implements OnInit{

   constructor(private activeRouter:ActivatedRoute,
               private authService: AuthService,private customerService:UserService,
               private bookingService: BookingService,
               private packageService: PackageService) {
  }

  getPackageId:any
  email:any
  token:any
  packageData:any
  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res=>{
     this.getPackageId= res.get('id')
      console.log(this.getPackageId)
    })
    this.token= this.authService.getCookies("myToken")
    this.email=this.getEmailFromToken(this.token)
    this.findBooking()
    this.AllCustomerDetails()
    this.AllPackageDetail()
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


  list:Array<any>=[]
  findBooking(){
    this.bookingService.findUpdateId(this.getPackageId).subscribe(res=>{
      this.list=res.data
    //  console.log(res.data)
   //   this.customerData=res.data[0].responseUserDto.email
      this.packageData=res.data[0].bookingDetailsLis[0].packageId
      console.log(this.packageData)
      this.form.patchValue({
        bookingId:res.data[0].bookingId,
        customerEmail:res.data[0].responseUserDto.email,
        customerName:res.data[0].responseUserDto.username,
        customerContact:res.data[0].responseUserDto.contact.contact1,
        customerAddress:res.data[0].responseUserDto.address,
        packageCategory:res.data[0].bookingDetailsLis[0].packageCategory,
       packageStartDate:res.data[0].bookingDetailsLis[0].packageStartDate,
packageEndDate:res.data[0].bookingDetailsLis[0].packageEndDate,
       packageValue:res.data[0].bookingDetailsLis[0].packageValue,

      })

    })


  }

  customerList: Array<any> = []
  AllCustomerDetails() {
    this.customerService.findAll().subscribe(res => {
      this.customerList = res.data

    })
  }




  // @ts-ignore
  loadAllCustomer(event: any) {
    let email = event.target.value
    if (email === "null") {
      return ""
    } else {
      this.customerService.findEmail(email).subscribe(res => {
        this.form.patchValue({
          customerId: res[0].userId,
          customerName: res[0].username,
          customerContact: res[0].contact.contact1,
          customerAddress: res[0].address,

        })
      })
    }

  }

  packageDetailsList: Array<any> = []

  AllPackageDetail() {
    this.packageService.findAll().subscribe(res => {
      this.packageDetailsList = res.data

    })
  }

  findPackageList: Array<any> = []

  // @ts-ignore
  loadAllPackage(event: any) {
    let packageId = event.target.value

    if (packageId === "null") {
      return ""
    } else {
      this.packageService.findId(packageId).subscribe(res => {
        this.findPackageList = res.data
        this.form.patchValue({
          packageId: res.data[0].packageId,
          packageCategory: res.data[0].category,
          packageStartDate: res.data[0].travelDuration.startDate,
          packageEndDate: res.data[0].travelDuration.endDate,
          packageValue: res.data[0].packageValue
        })
      })
    }


  }


  bankSlip(event: any) {
    const file = event.target.files[0]
    this.form.patchValue({
      bankSlip: file
    })
  }


  form = new FormGroup({
    bookingId: new FormControl('', [Validators.required]),
    customerId: new FormControl('', [Validators.required]),
    customerEmail: new FormControl('', [Validators.required]),
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


  pk_category = '';
  st_date = '';
  ed_date = ''
  pk_value = 0

  cartArray: any[] = []

  addToCart() {

    let tempCardObject = {
      packageId: this.packageData,
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
    let bookingId = this.form.get('bookingId')?.value;
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
    let bankSlipData:any = this.form.get('bankSlip')?.value;


    let total: number = 0;
    this.cartArray.forEach(data => {
      total += data.packageValue
    })

    if(!bankSlipData){
      // @ts-ignore
      let img2=document.getElementById('bankSlip-img-show').src
      bankSlipData=this.dataURLtoFile(img2,'bankSlip-img-show_jpg')

    }

    let setData = new FormData();
    setData.append('bookingId',bookingId!);
    // @ts-ignore
    setData.append('bookingDate',new Date().toLocaleDateString());

    // @ts-ignore
    setData.append('bookingPrice', total!);
    setData.append('bankSlip', bankSlipData!);
    setData.append('user', customerEmail!);
    setData.append('bookingDetails',JSON.stringify(this.cartArray))


    this.bookingService.update(setData).subscribe(res => {
      alert('update')
    })


  }

  dataURLtoFile(dataurl:any, filename:any) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }



}
