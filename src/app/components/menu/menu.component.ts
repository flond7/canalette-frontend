import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  public buttonArray = [
    {"text": "TEST", "link": "link"},
    {"text": "TEST 2", "link": "link"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
