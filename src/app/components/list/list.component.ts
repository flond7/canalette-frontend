import { Component, OnInit, Input } from '@angular/core';
/* FA ICONS */
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  faExclamationTriangle = faExclamationTriangle;

  //@Input() data:any;
  @Input() listOfColumns: any;
  filteredData: any;
  paidDrains: any;
  showAlert = false;

  data = [
    { "first_name": "Andrea", "last_name": "Pessa", "year_id": 1994, "paid": true, "amount": 150 },
    { "first_name": "Elisa", "last_name": "Pessa", "year_id": 1994, "paid": false, "amount": 150 },
    { "first_name": "", "last_name": "Pessa", "year_id": 1994, "paid": false, "amount": 150 },
    { "first_name": "Sabrina", "last_name": "Pessa", "year_id": 1994, "paid": true, "amount": 150 },
    { "first_name": null, "last_name": "Pessa", "year_id": 1994, "paid": false, "amount": 150 },
    { "first_name": "Francesca", "last_name": "Pessa", "year_id": 1994, "paid": false, "amount": 0 }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("list component");
    console.log(this.listOfColumns);
    this.filteredData = this.assignedDrainFilter();
    //console.log(this.filteredData)
    this.paidDrains = this.paidDrainCount()
  }

  rowChanged(e:boolean) {
    this.showAlert = e;
  }
  assignedDrainFilter() {
    return this.data.filter(row => row.first_name != '' && row.first_name != null);
  }
  paidDrainCount() {
    return this.filteredData.filter((el:any) => { return el.paid === false }).length
  }

}
