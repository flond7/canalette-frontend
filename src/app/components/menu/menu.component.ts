import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

/* FA ICONS */
import { faPlus, faWater, faCalendar, faUser, faLink, faFileCsv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  faPlus = faPlus;
  faWater = faWater;
  faCalendar = faCalendar;
  faUser = faUser;
  faLink = faLink;
  faFileCsv = faFileCsv;

  
  /* public buttonArray = [
    {"text": "Inserisci", "link": "link", "icon": "'faWater'"},
    {"text": "Storico per canaletta", "/link-drain": "link", "icon": "'faWater'"},
    {"text": "Storico per anno", "link": "/link-year", "icon": "'faWater'"},
    {"text": "Storico utente", "link": "/link-user", "icon": "'faWater'"},
  ] */

  constructor() { }

  ngOnInit(): void {
  }

}
