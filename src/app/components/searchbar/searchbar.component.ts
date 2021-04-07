import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Observable } from 'rxjs';

/* FA ICONS */
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {
  faSearch = faSearch;

  @Input() category: any; //DB NAMES: drainChannel, taxes, users, relational
  @Output() searchList = new EventEmitter<any>();
  data: any;
  searchMessage = ""

  inputMessages = {
    "drainChannel": "Numero canaletta",
    "user": "CF utente",
    "year": "Anno"} as const;


  constructor(public api: ApiService) { }

  ngOnInit(): void {
    //scegli la stringa per la barra
    this.searchMessage = this.findSearchBarMessage(this.inputMessages, this.category);
  }

  findSearchBarMessage<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]; // Inferred type is T[K]
  }

  //elemet has to be what input message says
  searchElement(e: any) {
    //depending on the category use a different API, so we can have a single component but different behaviours
    if (this.category === "user") {
      this.api.findSingleUser(e).subscribe((data: any)=>{
        this.searchList.emit(data);
        console.log(data);
      });
    } else if (this.category === "drainChannel") {
      this.api.findJoinedDrain(e).subscribe((data: any)=>{
        this.searchList.emit(data);
      });
    } /*else {
      this.data = this.api.findSingleYear(e).subscribe(response => this.searchList.emit(response))
    } */
 
  }
}