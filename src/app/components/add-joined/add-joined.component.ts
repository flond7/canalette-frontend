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
  data: any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  searchYear(year:any){
    this.api.findSingleYear(year).subscribe(res =>{console.log(res)})
  }

}
