import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  rows = [
    {"first_name":"Elisa","last_name":"Pessa","year_id": 1994, "paid": true},
    {"first_name":"Elisa","last_name":"Pessa","year_id": 1994, "paid": true},
    {"first_name":"Elisa","last_name":"Pessa","year_id": 1994, "paid": false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
