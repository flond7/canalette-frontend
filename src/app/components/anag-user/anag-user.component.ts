import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import * as GB from "src/app/constants";
//import { GlobalConstants } from "src/app/constants";

@Component({
  selector: 'app-anag-user',
  templateUrl: './anag-user.component.html',
  styleUrls: ['./anag-user.component.sass']
})
export class AnagUserComponent implements OnInit {
  @Input() status: string = 'new'; //new | edit | view
  //@Output() searchResult = new EventEmitter<any>();   //if true no error, if false error
  warningMessage = '';
  required = '';
  showAlert = false;
  type = "success";
  data = {
    "first_name": "",
    "last_name": "",
    "cf": "",
    "email": "",
    "tel": "",
    "category": "citizen",
  }

  /* REACTIVE FORM */
  userForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    cf: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    tel: new FormControl('', []),
    category: new FormControl('', []),
  });
  get fu(){return this.userForm.controls;}

  constructor(public api: ApiService, public fb: FormBuilder) { }

  ngOnInit(): void { 
    this.required = GB.GlobalConstants.FORM_ERR_MESG.required;
  }

  saveUser() {
    let user = {
      "first_name": this.data.first_name,
      "last_name": this.data.last_name,
      "cf": this.data.cf,
      "email": this.data.email,
      "tel": this.data.tel,
      "category": this.data.category,
    };

    this.api.createUser(user).subscribe(
      (res) => { this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.saved; this.type = 'success', this.showAlert = true},
      (error) => { this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.dangerUser; this.type = 'danger', this.showAlert = true}
    );
  }

}
