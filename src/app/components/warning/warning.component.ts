import { Component, Input, OnInit } from '@angular/core';
/* FA ICONS */
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.sass']
})
export class WarningComponent implements OnInit {

  faExclamationTriangle = faExclamationTriangle;
  @Input() warningMessage: string = '';
  @Input() showAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
