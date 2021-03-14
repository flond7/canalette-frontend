import { Component, Input, OnChanges } from '@angular/core';
/* FA ICONS */
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnChanges {
  faExclamationTriangle = faExclamationTriangle;

  @Input() data = [];
  @Input() listOfColumns: any;
  filteredData: any;
  paidDrains: any;
  showAlert = false;

  constructor() { }

  ngOnChanges(): void {
    console.log("list component");
    //console.log(this.listOfColumns);
    console.log(this.data);
    if(this.data != undefined) {  //to avoid error when data is not loaded yet
      this.paidDrains = this.data.filter((el:any) => { return el.paid === false }).length;
    }
  }

  rowChanged(e:boolean) {
    this.showAlert = e;
  }

}
