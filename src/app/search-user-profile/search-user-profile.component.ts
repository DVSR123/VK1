import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalVariables } from '../globals';

@Component({
  selector: 'app-search-user-profile',
  templateUrl: './search-user-profile.component.html',
  styleUrls: ['./search-user-profile.component.css']
})
export class SearchUserProfileComponent implements OnInit {

  users$: Object;
  constructor(private apiService: ApiService, private glob: GlobalVariables) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => {
      this.users$ = data;
      alert('S');
      this.glob.global_Users$ = this.users$;
    });

    //this.getUsers();

  }

  // public  getUsers(){
  //     this.apiService.getUsers().subscribe((data) => {
  //         this.users$  =  data;          
  //     });
  // }


}
