import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-joined',
  templateUrl: './add-joined.component.html',
  styleUrls: ['./add-joined.component.sass']
})
export class AddJoinedComponent implements OnInit {

  errorYear = false;
  errorUser = false;
  errorDrain = false;
  errorGeneral= false;
  okMessage = false;
  messages = {
    "errorYear": "Le tariffe per quest'anno non sono ancora state definite. Inseriscile prima di prseguire",
    "errorUser": "Questo utente non si trova nel sistema",
    "errorDrain": "Questa canaletta non è stata inserita nel sistema",
    "errorGeneral": "Compila i campi utente, canaletta e anno",
    "okMessage": "Record salvato correttamente"
  }
  year: any;
  cf: any;
  num: any;
  amount = 0;
  paid = 0;
  id_user : any; id_drain: any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  searchYear(){
    this.errorYear = false;
    this.api.findSingleYear(this.year)
    .subscribe(
      (res) => { console.log(res) },
      (error) => { this.errorYear = true;})
  }

  searchUser(){
    this.errorUser = false;
    this.api.findSingleUser(this.cf)
    .subscribe(
      (res: any) => { this.id_user = res[0]["id_user"]},
      (error) => { this.errorUser = true;})
  }

  searchDrain(){
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
      (error) => { this.errorDrain = true;})
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
      "id_year":this.year
    }
    this.api.createRelational(data).subscribe(res => {
      console.log(res)
      this.okMessage = true;
    })
    }
  }

}
