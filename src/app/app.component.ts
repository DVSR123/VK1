import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
import { GlobalVariables } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OktaApp';
  app_User$: object;
  constructor(private apiService: ApiService, private glob: GlobalVariables) {


  }
  ngOnInit() {
    alert('app');

  }
}
