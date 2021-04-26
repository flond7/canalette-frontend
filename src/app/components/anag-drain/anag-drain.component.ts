import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import * as GB from "src/app/constants";

@Component({
  selector: 'app-anag-drain',
  templateUrl: './anag-drain.component.html',
  styleUrls: ['./anag-drain.component.sass']
})
export class AnagDrainComponent implements OnInit {
  @Input() status: string = 'new'; //new | edit | view
  warningMessage = "";
  required="";
  type = "success";
  showAlert = false;
  data = { "num":"","street":"","fogl":"","map":""};
  
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
    this.required = GB.GlobalConstants.FORM_ERR_MESG.required;
  }

  saveDrain() {
    let drain = {
      "num": this.data.num,
      "street": this.data.street,
      "fogl": this.data.fogl,
      "map": this.data.map
    };

    this.api.createDrain(drain).subscribe(
      (res) => { 
        this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.saved; 
        this.type = 'success', 
        this.showAlert = true
        this.reset();
      },
      (error) => { 
        this.warningMessage = GB.GlobalConstants.FORM_ERR_MESG.dangerDrain; 
        this.type = 'danger', 
        this.showAlert = true}
    );
  }

  reset() {
    this.data = {"num":"","street":"","fogl":"","map":""};
    this.drainForm.markAsUntouched();
    this.drainForm.markAsPristine();
  }

}
