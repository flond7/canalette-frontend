import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { forkJoin } from 'rxjs';
import * as GB from "src/app/constants";

@Component({
  selector: 'app-anag-relations',
  templateUrl: './anag-relations.component.html',
  styleUrls: ['./anag-relations.component.sass']
})
export class AnagRelationsComponent implements OnInit {

  data = {"id_year": "", "id_user":"","id_drain":"", "cf": "", "num": "", "amount_paid": 0, "amount_computed": 0, "paid": 0 };

  okMessage = false;
  year: any;
  cf: any;
  num: any;
  amount_paid = 0;
  paid = 0;
  id_user: any; id_drain: any;
  warningMessage = "";

  //CUSTOM ERROR MESSAGES FOR JOINED
  errorYear = false;
  errorUser = false;
  errorDrain = false;
  errorGeneral = false;
  required = "";
  errorDrainMsg = "";
  errorUserMsg = "";
  errorYearMsg = "";
  
  //ALERT VARS
  type = 'success';
  showAlert = false;

  //edit vars
  @Input() state: any;    //new | edit
  @Input() inputData: any;    //new | edit

  constructor(public api: ApiService) { }

  /* REACTIVE FORM DRAIN */
  relationForm = new FormGroup({
    num: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    cf: new FormControl('', [Validators.required]),
    amount_paid: new FormControl(''),
    amount_computed: new FormControl(''),
  });
  get fr() { return this.relationForm.controls; }

  ngOnInit(): void {
    this.errorDrainMsg = GB.GlobalConstants.FORM_ERR_MESG.joinedErrDrain;
    this.errorUserMsg = GB.GlobalConstants.FORM_ERR_MESG.joinedErrUser;
    this.errorYearMsg = GB.GlobalConstants.FORM_ERR_MESG.joinedErrYear;
    this.required = GB.GlobalConstants.FORM_ERR_MESG.required;
    /* if edit then get data and show them */
    if (this.state == 'edit') {
      this.data = this.inputData;
      console.log("INSIDE COMP");
      console.log(this.data);
    }
  }
  searchYear() {
    this.errorYear = false;
    this.api.findSingleYear(this.data.id_year)
      .subscribe(
        (res) => { console.log(res) },
        (error) => { this.errorYear = true; })
  }

  searchUser() {
    this.errorUser = false;
    this.api.findSingleUser(this.data.cf)
      .subscribe(
        (res: any) => { this.id_user = res[0]["id_user"] },
        (error) => { this.errorUser = true; })
  }

  searchDrain() {
    this.errorDrain = false;
    this.api.findSingleDrain(this.data.num)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res[0] == undefined) {
            this.errorDrain = true;
          } else {
            this.id_drain = res[0]["id_drain"]
          }
        },
        (error) => { this.errorDrain = true; })
  }

  addRelation() {
    //find ids
    forkJoin([
      this.api.findSingleUser(this.data.cf),
      this.api.findSingleDrain(this.data.num),
      this.api.findSingleYear(this.data.id_year)
    ]).subscribe(res => {
      //get the observables from forkjoin API
      let user: { [key: string]: any } = res[0];
      let drain: { [key: string]: any } = res[1];
      let year: { [key: string]: any } = res[2];
      //compute amount_computed
      let userIvaType = user[0]['tax_type'];
      let yearTaxType = 'tax' + user[0]['category'][0].toUpperCase() + user[0]['category'].slice(1);
      let moneyToPay = parseFloat(year[0][yearTaxType]) +
        (parseFloat(year[0][yearTaxType]) * parseFloat(year[0][userIvaType]) / 100) +
        parseFloat(year[0]['mailing_money']);

      //save IDs and other data in the object
      let obj = { //because with this TS version you can't use delete unless the property is undefined
        "amount_computed": moneyToPay,
        "id_user": user[0]['id_user'],
        "id_drain":drain[0]['id_drain'],
        "id_year": this.data.id_year,
        "paid": this.data.amount_paid > 0 ? 1 : 0,
        "amount_paid": this.data.amount_paid
      }
      // single upload
      this.api.createRelational(obj).subscribe(
        (res) => {
          this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.saved;
          this.type = 'success';
          this.showAlert = true;
          this.reset()
        },
        (error) => {
          console.log(error);
          this.type = 'danger';
          this.showAlert = true;
          this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.joinedErr
        }
      );
    });
  };

  reset(){
    this.data = {"id_year": "", "id_user":"","id_drain":"", "cf": "", "num": "", "amount_paid": 0, "amount_computed": 0, "paid": 0 };
    this.relationForm.markAsUntouched();
    this.relationForm.markAsPristine();
  }

}
