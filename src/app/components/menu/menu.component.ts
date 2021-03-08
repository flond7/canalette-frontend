import { Component, OnInit } from '@angular/core';

/* FA ICONS */
import { faPlus, faTimes, faCheck, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  faPlus = faPlus;
  
  public buttonArray = [
    {"text": "Inserisci", "link": "link"},
    {"text": "Visualizza", "link": "link"},
    {"text": "Scarica", "link": "link"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
