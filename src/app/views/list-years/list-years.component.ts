import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

/* FA ICONS */
import { faCalendar, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-years',
  templateUrl: './list-years.component.html',
  styleUrls: ['./list-years.component.sass']
})
export class ListYearsComponent implements OnInit {
  faCalendar = faCalendar;
  dataResult: any;
  noData = false;

  listOfColumns = {
    "first_name": true,
    "last_name": true,
    "year": true,
    "drain": true,
    "paid": true,
    "amount_computed": true,
    "amount_paid": true,
    "bill_number":true
  };

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }
  searchListResult(e: any) {
    this.dataResult = e;
    //if searched data is not assigned to joined table and I've never done this check before
    if (this.dataResult[0].id == null && this.noData == false) {
      console.log("no data")
      this.noData = true;
    }
  }

}
