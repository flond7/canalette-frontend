import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

/* FA ICONS */
import { faWater, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-drain',
  templateUrl: './list-drain.component.html',
  styleUrls: ['./list-drain.component.sass']
})
export class ListDrainComponent implements OnInit {

  faWater = faWater;
  dataResult: any;
  noData = false;

  listOfColumns = {
    "first_name": true,
    "last_name": true,
    "year": true,
    "drain": true,
    "paid": true,
    "amount": true
  };

  constructor(public api: ApiService) { }

  ngOnInit(): void {}

  searchListResult(e:any) {
    this.dataResult = e;
    //if searched data is not assigned to joined table and I've never done this check before
    if(this.dataResult[0].id == null && this.noData == false) {
      console.log("no data")
      this.noData = true;
    }
  }

}
