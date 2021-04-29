import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import * as GB from "src/app/constants";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-bulk-year',
  templateUrl: './bulk-year.component.html',
  styleUrls: ['./bulk-year.component.sass']
})
export class BulkYearComponent implements OnInit {
  warningMessage = "";
  required = "";
  type = "success";
  showAlert = false;

  csvData: any[] = [];
  header = false;

  everythingOk = 0;
  uploadLen: any;

  constructor(public api: ApiService, private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {
  }

  splitAndFormObject(elem: any, index: any) {
    let elements = elem.split(';');
    let obj: any = {};
    for (let i = 0; i < elements.length; i++) {
      let a = index[i];
      obj[a] = elements[i];
    }
    //push in array of objects
    //this.csvData.push(obj)
    this.api.createYear(obj).subscribe(
      (res) => { 
        this.everythingOk++;
        if (this.everythingOk == this.uploadLen) {
        console.log("OK");
        this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.saved;
        this.type = 'success';
        this.showAlert = true;
      }; },
      (error) => { 
        this.type = 'danger'; 
        this.showAlert = true;
        this.warningMessage = "Sono stati inseriti solo " + this.everythingOk + " record. Controlla il file excel e che i dati per questi anni non si trovino già nel database" })
  }

  // Your applications input change listener for the CSV File
  uploadMultipleRecords($event: any): void {
    const files = $event.srcElement.files;  // Select the files from the event
    this.everythingOk = 0;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .subscribe((result: any) => {
        console.log(result);
        let indexes = result[0][0].split(';')
        result.shift(); //remove first element with headers
        this.uploadLen = result.length;
        result.map((elem: any) => {
          this.splitAndFormObject(elem[0], indexes);
        }, (error: NgxCSVParserError) => {
          console.log('Error', error);
        });
      })
  }

}
