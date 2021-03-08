import { Component, OnInit, Input } from '@angular/core';

/* FA ICONS */
import { faEdit, faTimes, faCheck, faMoneyBillAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-db-row',
  templateUrl: './db-row.component.html',
  styleUrls: ['./db-row.component.sass']
})
export class DbRowComponent implements OnInit {

  /* FA ICONS */
  faEdit = faEdit;
  faTimes = faTimes;
  faCheck = faCheck;
  faMoneyBillAlt = faMoneyBillAlt;
  faTrashAlt = faTrashAlt;

  //@Input() data={"first_name":"","last_name":"","year_id":0,"paid": false};

  @Input() data:any;
  @Input() listOfColumns:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.listOfColumns)
  }

}
