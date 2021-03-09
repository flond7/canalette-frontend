import { Component, OnInit, Input } from '@angular/core';


/* FA ICONS */
import { faPencilAlt, faTimes, faMoneyBillAlt, faCheck, faThumbsUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-db-row',
  templateUrl: './db-row.component.html',
  styleUrls: ['./db-row.component.sass']
})
export class DbRowComponent implements OnInit {

  /* FA ICONS */
  faPencilAlt = faPencilAlt;
  faTimes = faTimes;
  faMoneyBillAlt = faMoneyBillAlt;
  faCheck = faCheck;
  faThumbsUp = faThumbsUp;
  faTrashAlt = faTrashAlt;

  @Input() data: any;
  @Input() listOfColumns: any;

  unclickable = true;
  constructor() { }

  ngOnInit(): void { }

  paidChange(row: any) {
    if (row.paid === false) {
      //visualize input and make available DONE button
      this.unclickable = false;
      //emit a value that tells the list something is changed so it can visualize a warning

      // change the paid value
      row.paid = !row.paid
    }
  }

}
