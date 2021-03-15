import { Component, OnInit } from '@angular/core';

/* FA ICONS */
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit {

  faUser = faUser;
  dataResult: any;

  listOfColumns = {
    "first_name": false,
    "last_name": false,
    "year": true,
    "drain": true,
    "paid": true,
    "amount": true
  };

  constructor() { }

  ngOnInit(): void {}

  searchListResult(e:any) {
    this.dataResult = e;
  }


}