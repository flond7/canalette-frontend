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
  @Input() noData: any;

  filteredData: any;
  paidDrains: any;
  showAlert = false;

  // generate bill numbers
  numberAdded: any;
  indexAdded: any

  constructor() { }

  ngOnChanges(): void {
    //console.log(this.listOfColumns);
    //console.log(this.data);
    if(this.data != undefined) {  //to avoid error when data is not loaded yet
      this.paidDrains = this.data.filter((el:any) => { return el.paid === '1' }).length;
    }
  }

  rowChanged(e:boolean) {
    this.showAlert = e;
  }

  rowDeleted(e:any) {
    console.log(e);
    this.data.splice(this.data.findIndex((el:any) => el.id == e));
    //this.paidDrains = this.data.filter((el:any) => { return el.paid === '1' }).length;
  }

  addedBillNumber(e: any, i: any){
    this.indexAdded = i;
    this.numberAdded = e;
  }

  generateBillNumbers() {
    //let firstBill = 
    console.log(this.data);
    this.data.forEach(row => {
      console.log(row)
      this.indexAdded++;
    })

  }

}
