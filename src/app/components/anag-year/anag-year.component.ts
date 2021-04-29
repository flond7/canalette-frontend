import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import * as GB from "src/app/constants";

@Component({
  selector: 'app-anag-year',
  templateUrl: './anag-year.component.html',
  styleUrls: ['./anag-year.component.sass']
})
export class AnagYearComponent implements OnInit {

  @Input() status: string = 'new'; //new | edit | view
  warningMessage = "";
  required="";
  type = "success";
  showAlert = false;
  data = { "year":"","taxCitizen":"","taxBusiness":""};
  
  constructor(public api: ApiService, public fb: FormBuilder) { }

  /* REACTIVE FORM DRAIN */
  yearForm = new FormGroup({
    year: new FormControl('', [Validators.required]),
    taxBusiness: new FormControl('', [Validators.required]),
    taxCitizen: new FormControl('', [Validators.required])
  });
  get fy(){return this.yearForm.controls;}

  ngOnInit(): void { 
    this.required = GB.GlobalConstants.FORM_ERR_MESG.required;
  }

  saveDrain() {
    let year = {
      "year": this.data.year,
      "taxBusiness": this.data.taxBusiness,
      "taxCitizen": this.data.taxCitizen
    };

    this.api.createYear(year).subscribe(
      (res) => { 
        this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.saved; 
        this.type = 'success', 
        this.showAlert = true
        this.reset();
      },
      (error) => { 
        this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.dangerYear; 
        this.type = 'danger', 
        this.showAlert = true}
    );
  }

  reset() {
    this.data = {"year":"","taxCitizen":"","taxBusiness":""};
    this.yearForm.markAsUntouched();
    this.yearForm.markAsPristine();
  }

}
