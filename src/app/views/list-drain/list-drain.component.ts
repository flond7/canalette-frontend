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
  }

}
