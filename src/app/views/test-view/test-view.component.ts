import { Component, OnInit } from '@angular/core';
import { MAXIMUM_NUMBER } from '../../../constants';
import { TEST } from '../../../constants';
/* FA ICONS */
import { faCoffee, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.sass']
})
export class TestViewComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

  /* FA ICONS */
  faCoffee = faCoffee;
  faTimes = faTimes;
  faCheck = faCheck;

}
