import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import * as GB from "src/app/constants";

/* FA ICONS */
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {
  faSearch = faSearch;

  @Input() category: any; //DB NAMES: drainChannel, year, users, relational
  @Output() searchList = new EventEmitter<any>();
  data: any;
  searchMessage: any;

  /* REACTIVE FORM SEARCHBAR */
  searchBar = new FormGroup({
    searchMessage: new FormControl(''),
  });
  get fs(){return this.searchBar.controls;}

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    //scegli la stringa per la barra
    this.searchMessage = this.findSearchBarMessage(GB.GlobalConstants.SEARCH_BAR_MESG, this.category);
  }

  findSearchBarMessage<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]; // Inferred type is T[K]
  }

  //elemet has to be what input message says
  searchElement(e: any) {
    //depending on the category use a different API, so we can have a single component but different behaviours
    if (this.category === "user") {
      this.api.findSingleUser(e).subscribe((data: any) => {
        this.searchList.emit(data);
      });
    } else if (this.category === "drainChannel") {
      this.api.findJoinedDrain(e).subscribe((data: any) => {
        this.searchList.emit(data);
      });
    } else if (this.category === "year") {
      this.data = this.api.findJoinedYear(e).subscribe((data: any) => {
        this.searchList.emit(data);
      });
    }
  }

}