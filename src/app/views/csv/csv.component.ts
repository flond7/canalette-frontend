import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import * as GB from "src/app/constants";
import { ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
/* FA ICONS */
import { faCloudUploadAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.sass']
})
export class CsvComponent implements OnInit {
  faCloudUploadAlt = faCloudUploadAlt;
  faCloudDownloadAlt = faCloudDownloadAlt;

  data = { "yearFrom": "", "yearTo": "", "fileToUpload": "" };
  required = "";

  csvRecords: any[] = [];
  header = false;

  /* REACTIVE FORM DRAIN */
  downloadForm = new FormGroup({
    yearFrom: new FormControl('', [Validators.required]),
    yearTo: new FormControl('',),
    paid: new FormControl(''),
  });
  obj: any;
  csvArray: any;
  get fd() { return this.downloadForm.controls; }

  /* REACTIVE FORM DRAIN */
  uploadForm = new FormGroup({
    yearFrom: new FormControl('', [Validators.required]),
    yearTo: new FormControl('',),
    paid: new FormControl(''),
  });
  get fu() { return this.uploadForm.controls; }

  dbCols = [];
  csvData: Array<any> = [];

  constructor(public api: ApiService, public fb: FormBuilder, private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {
    this.required = GB.GlobalConstants.FORM_ERR_MESG.required;
  }

  download() { }

  upload() { }

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;



  splitAndFormObject(elem: any, index: any) {
    let elements = elem.split(';');
    let obj: any = {};
    for (let i = 0; i < elements.length; i++) {
      let a = index[i];
      obj[a] = elements[i];
      console.log(obj)
    }
    //push in array of objects
    this.csvData.push(obj)
  }

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;
    let csvArray: Array<any> = []

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .subscribe((result: any) => {
        console.log(result);
        let indexes = result[0][0].split(';')
        result.shift(); //remove first element with headers
        result.map((elem: any) => {
          this.splitAndFormObject(elem[0], indexes);
        }, (error: NgxCSVParserError) => {
          console.log('Error', error);
        });

      }
      )
  }

}