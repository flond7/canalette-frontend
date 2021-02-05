import { Component, OnInit } from '@angular/core';
/* FA ICONS */
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.sass']
})
export class TestViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* FA ICONS */
  faCoffee = faCoffee;

}
