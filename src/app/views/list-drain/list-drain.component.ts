import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

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

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    console.log("list view");
    console.log(this.listOfColumns);
    //this.getElements();
  }
  /* getElements() {
    this.api.userReadAll().subscribe(response => {
      console.log(response)
    })
  } */

}
