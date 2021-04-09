import { Component, Input, OnInit } from '@angular/core';
/* FA ICONS */
import { faExclamationTriangle, faThumbsUp, faBomb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.sass']
})
export class WarningComponent implements OnInit {

  faExclamationTriangle = faExclamationTriangle;
  faThumbsUp = faThumbsUp;
  faBomb = faBomb;

  @Input() warningMessage: string = '';
  @Input() type: string = 'danger'; //works with: danger | success | warning
  @Input() showAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
