import { Component, OnInit } from '@angular/core';
/* FA ICONS */
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-joined',
  templateUrl: './joined.component.html',
  styleUrls: ['./joined.component.sass']
})
export class JoinedComponent implements OnInit {

  faLink = faLink; 

  constructor() { }

  ngOnInit(): void {
  }

}
