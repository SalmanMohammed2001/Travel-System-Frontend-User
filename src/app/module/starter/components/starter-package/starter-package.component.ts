import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PackageService} from "../../../../service/pacage/package.service";

@Component({
  selector: 'app-starter-package',
  templateUrl: './starter-package.component.html',
  styleUrls: ['./starter-package.component.scss']
})
export class StarterPackageComponent implements AfterViewInit{

  constructor(private service:PackageService) {
  }


/*  ngOnInit(): void {
    this.findAll()
  }*/

  ngAfterViewInit() {
    this.findAll()
  }

  list:Array<any>=[]
  findAll(){
    this.service.findAllPackage().subscribe(res=>{
      this.list=res.data
    })
  }
}
