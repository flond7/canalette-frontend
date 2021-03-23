import { Component, OnInit } from '@angular/core';
/* FA ICONS */
import { faUser, faWater, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  faUser = faUser;
  faWater = faWater;
  faCalendar = faCalendar;
  
  constructor() { }

  ngOnInit(): void {
  }

}
