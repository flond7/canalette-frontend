import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


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

  @Output() rowChanged = new EventEmitter<boolean>();
  @Output() rowDeleted = new EventEmitter<any>();

  unclickable = true;
  constructor(public api: ApiService) { }

  ngOnInit(): void {console.log(this.data) }

  paidChange(row: any) {
    console.log(row);
    if (row.paid === '0') {
      //visualize input and make available DONE button
      this.unclickable = false;
      //emit a value that tells the list something is changed so it can visualize a warning
      this.rowChanged.emit(true);
      // change the paid value
      row.paid = '1';
    }
  }

  deleteElement(category: string, id: any) {
    this.rowDeleted.emit(id);
      this.api.deleteRelational(id).subscribe(res => {console.log(res)});
  }

}
