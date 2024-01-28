import { Component } from '@angular/core';
import {LoadingService} from "./service/loading/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Travel-System-User-Frontend';

  constructor(protected loadingService:LoadingService) {
  }
}
