import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalVariables } from '../globals';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  User$: object;
  constructor(private apiService: ApiService, private glob: GlobalVariables) { }

  ngOnInit() {
    alert(this.glob.global_Users$);
    this.User$ = this.glob.global_Users$;
  }

}
