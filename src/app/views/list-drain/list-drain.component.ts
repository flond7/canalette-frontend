import { Component, OnInit } from '@angular/core';
/* FA ICONS */
import { faWater } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-drain',
  templateUrl: './list-drain.component.html',
  styleUrls: ['./list-drain.component.sass']
})
export class ListDrainComponent implements OnInit {

  faWater = faWater;

  listOfColumns = {
    "first_name": true,
    "last_name": true,
    "year": true,
    "drain": true,
    "paid": true,
    "amount": true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
