import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-anagrafic',
  templateUrl: './anagrafic.component.html',
  styleUrls: ['./anagrafic.component.sass']
})
export class AnagraficComponent implements OnInit {

  @Input() status: string = 'new'; //new | edit | view
  @Input() view: string = 'drain';   //year | user | drain

  message = "";
  data: any;
  type = "success";
  showAlert = false;

  messages : { [key: string]: any } = {
    saved: "Elemento salvato",
    warning: "Compila tutti i campi",
    dangerYear: "Errore: probabilmente hai già inserito i dati per quest'anno",
    dangerDrain: "Errore: probabilmente hai già inserito i dati per questa canaletta",
    dangerUser: "Errore: probabilmente hai già inserito i dati per quest'utente",
  };

  listOfColumns = {
    "year": true,
    "taxCitizen": true,
    "taxBusiness": true,
    "first_name": true,
    "last_name": true,
    "cf": true,
    "email": true,
    "tel": true,
    "category": true,
    "paid": true,
    "num": true,
    "street": true,
    "fogl": true,
    "map": true
  };
  
  constructor(public api: ApiService, public fb: FormBuilder) { }

    /* REACTIVE FORM DRAIN */
    drainForm = new FormGroup({
      num: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      fogl: new FormControl('0'),
      map: new FormControl('0'),
    });
    get fd(){return this.drainForm.controls;}



  ngOnInit(): void {
    this.checkStatus();
  }

  checkStatus() {
    if (this.status === "new") {
      this.data = {
        "year": 2020,
        "taxCitizen": 0.00,
        "taxBusiness": 0.00,
        "first_name": "",
        "last_name": "",
        "cf": "",
        "email": "",
        "tel": "",
        "category": "citizen",
        "paid": '0',
        "num": '',
        "street": '',
        "fogl": '',
        "map": ''
      };
    } else {
      this.data = {
        "year": 1990,
        "taxCitizen": 150,
        "taxBusiness": 100,
        "first_name": "elisa",
        "last_name": "pessa",
        "cf": "PSSLSE83LAS980E",
        "email": "mail@gmail.com",
        "tel": "090",
        "category": "business",
        "paid": '0',
        "num": '112',
        "street": 'via roma',
        "fogl": '1233',
        "map": '78'
      };
    
    }
  }

  save() {
    if (this.status === "new") {
      this.createElement();
    } else {
      console.log("UPDATE")
    }
  }

  success(){
    this.message=this.messages.saved;
    this.type='success';
    this.showAlert = true;
  }

  signalError(msg:string) {
    this.message = this.messages[msg];
    this.type='danger';
    this.showAlert = true;
  }

  createElement(){
    console.log(this.view);
    if (this.view == "user") {
      let user = {
        "first_name": this.data.first_name,
        "last_name": this.data.last_name,
        "cf": this.data.cf,
        "email": this.data.email,
        "tel": this.data.tel,
        "category": this.data.category,
      };
      this.api.createUser(user).subscribe(res => {
        this.success();
        console.log(res)
      });
    }  else if (this.view == "year") {
      let year = {
        "id_year": this.data.year,
        "taxCitizen": parseFloat(this.data.taxCitizen),
        "taxBusiness": parseFloat(this.data.taxBusiness)
      }
      this.api.createYear(year).subscribe(
        (res) => {this.success();},
        (error) => {this.signalError('dangerYear')});
    } else {
    let drain = {
        "num": this.data.num,
        "street": this.data.street,
        "fogl": this.data.fogl,
        "map": this.data.map
      }  
      this.api.createDrain(drain).subscribe(
        (res) => {this.success();},
        (error) => {this.signalError('dangerDrain')
      });
    };
  }

  convertToDouble(e: any, cat: string) {
    this.data[cat] = parseFloat(e).toFixed(2);
  }

}
