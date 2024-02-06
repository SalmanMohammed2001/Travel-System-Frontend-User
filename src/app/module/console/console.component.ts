import {Component, OnInit} from '@angular/core';
import {DetailsService} from "../../service/dataSet/details.service";

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit{
      constructor(private detailService:DetailsService) {
      }

   value=this.detailService.getPackageId()
  ngOnInit(): void {
    console.log(this.value)
  }
}
