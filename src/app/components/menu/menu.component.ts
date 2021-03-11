import { Component, OnInit } from '@angular/core';

/* FA ICONS */
import { faPlus, faWater, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

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

  
  public buttonArray = [
    {"text": "Inserisci", "link": "link", "icon": "faWater"},
    {"text": "Storico per canaletta", "link": "link", "icon": "faWater"},
    {"text": "Storico per anno", "link": "link", "icon": "faCalendar"},
    {"text": "Storico utente", "link": "link", "icon": "faUser"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
