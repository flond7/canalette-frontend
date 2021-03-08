import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  //@Input() data:any;

  listOfColumns = {
    "first_name": true,
    "last_name": true,
    "year": true,
    "drain": false,
    "paid": true,
    "amount": true};

  data = [
    { "first_name": "Elisa", "last_name": "Pessa", "year_id": 1994, "paid": true, "amount": 150 },
    { "first_name": "Elisa", "last_name": "Pessa", "year_id": 1994, "paid": true, "amount": 150 },
    { "first_name": "Elisa", "last_name": "Pessa", "year_id": 1994, "paid": false, "amount": 0 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
