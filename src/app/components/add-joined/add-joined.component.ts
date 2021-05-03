import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { forkJoin } from 'rxjs';
import * as GB from "src/app/constants";

@Component({
  selector: 'app-add-joined',
  templateUrl: './add-joined.component.html',
  styleUrls: ['./add-joined.component.sass']
})
export class AddJoinedComponent implements OnInit {

  errorYear = false;
  errorUser = false;
  errorDrain = false;
  errorGeneral = false;
  okMessage = false;
  messages = {
    "errorYear": "Le tariffe per quest'anno non sono ancora state definite. Inseriscile prima di prseguire",
    "errorUser": "Questo utente non si trova nel sistema",
    "errorDrain": "Questa canaletta non è stata inserita nel sistema",
    "errorGeneral": "Compila i campi utente, canaletta e anno",
    "okMessage": "Record salvato correttamente"
  }
  warningMessage = "";
  year: any;
  cf: any;
  num: any;
  amount = 0;
  paid = 0;
  id_user: any; id_drain: any;

  csvData: any[] = [];
  header = false;


  type = 'success';
  showAlert = false;
  everythingOk = 0;
  uploadLen: any;

  constructor(public api: ApiService, private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {

  }

  searchYear() {
    this.errorYear = false;
    this.api.findSingleYear(this.year)
      .subscribe(
        (res) => { console.log(res) },
        (error) => { this.errorYear = true; })
  }

  searchUser() {
    this.errorUser = false;
    this.api.findSingleUser(this.cf)
      .subscribe(
        (res: any) => { this.id_user = res[0]["id_user"] },
        (error) => { this.errorUser = true; })
  }

  searchDrain() {
    this.errorDrain = false;
    this.api.findSingleDrain(this.num)
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

  addJoined() {
    if (this.year == undefined || this.id_user == undefined || this.id_drain == undefined) {
      this.errorGeneral = true;
    } else {
      //paid 1 for true
      let data = {
        "amount": this.amount,
        "paid": this.paid,
        "id_drain": this.id_drain,
        "id_user": this.id_user,
        "id_year": this.year
      }
      this.api.createRelational(data).subscribe(res => {
        console.log(res)
        this.okMessage = true;
      })
    }
  }

  //BULK CSV FUNCTIONS
  addRelation(obj: any) {
    //find ids
    forkJoin([
      this.api.findSingleUser(obj['cf']),
      this.api.findSingleDrain(obj['num']),
      this.api.findSingleYear(obj['id_year'])
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
      obj['amount_computed'] = moneyToPay;
      obj['id_user'] = user[0]['id_user'];
      obj['id_drain'] = drain[0]['id_drain'];
      obj['paid'] = obj['amount_paid'] > 0 ? 1 : 0;
      delete obj.cf;
      delete obj.num;
      console.log(obj);
      this.api.createRelational(obj).subscribe(
        (res) => {
          this.everythingOk++;
          if (this.everythingOk == this.uploadLen) {
            console.log("OK");
            this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.saved;
            this.type = 'success';
            this.showAlert = true;
          }
        },
        (error) => {
          this.type = 'danger';
          this.showAlert = true;
          this.warningMessage = "Sono stati inseriti solo " + this.everythingOk + " record. Controlla il file excel e che i dati per questi anni non si trovino già nel database"
        }
      );
    });
  };

  splitAndFormObject(elem: any, index: any) {
    let elements = elem.split(';');
    let obj: any = {};
    for (let i = 0; i < elements.length; i++) {
      let a = index[i];
      obj[a] = elements[i];
    }
    this.addRelation(obj);
  }

  uploadMultipleRecords($event: any): void {
    const files = $event.srcElement.files;  // Select the files from the event
    this.everythingOk = 0;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .subscribe((result: any) => {
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
