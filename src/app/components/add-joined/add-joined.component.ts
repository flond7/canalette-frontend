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
  year: any;
  cf: any;
  num: any;

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
      (res) => { console.log(res) },
      (error) => { this.errorUser = true;})
  }

  searchDrain(){
    this.errorDrain = false;
    this.api.findSingleDrain(this.cf)
    .subscribe(
      (res) => { console.log(res) },
      (error) => { this.errorDrain = true;})
  }

}
