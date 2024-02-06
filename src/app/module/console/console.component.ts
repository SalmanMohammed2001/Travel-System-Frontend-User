import {Component, OnInit} from '@angular/core';
import {DetailsService} from "../../service/dataSet/details.service";
import {AuthService} from "../../service/auth/Auth.service";
import {jwtDecode} from "jwt-decode";


@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent {}
