import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import * as GB from "src/app/constants";
import { NgxCsvParserModule } from 'ngx-csv-parser';
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

  data = {"yearFrom":"","yearTo":"", "fileToUpload":""};
  required = "";



  /* REACTIVE FORM DRAIN */
  downloadForm = new FormGroup({
    yearFrom: new FormControl('', [Validators.required]),
    yearTo: new FormControl('', ),
    paid: new FormControl(''),
  });
  get fd(){return this.downloadForm.controls;}

  /* REACTIVE FORM DRAIN */
  uploadForm = new FormGroup({
    yearFrom: new FormControl('', [Validators.required]),
    yearTo: new FormControl('', ),
    paid: new FormControl(''),
  });
  get fu(){return this.uploadForm.controls;}

  constructor(public api: ApiService, public fb: FormBuilder) { }

  ngOnInit(): void { 
    this.required = GB.GlobalConstants.FORM_ERR_MESG.required;
  }

  download(){}

  upload(){}

}
