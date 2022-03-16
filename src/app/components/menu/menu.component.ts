import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeService } from 'src/app/services/theme.service';

/* FA ICONS */
import { faPlus, faWater, faCalendar, faUser, faLink, faFileCsv, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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
  faMoon = faMoon;
  faSun = faSun;
  colorTheme : any;

  
  /* public buttonArray = [
    {"text": "Inserisci", "link": "link", "icon": "'faWater'"},
    {"text": "Storico per canaletta", "/link-drain": "link", "icon": "'faWater'"},
    {"text": "Storico per anno", "link": "/link-year", "icon": "'faWater'"},
    {"text": "Storico utente", "link": "/link-user", "icon": "'faWater'"},
  ] */

  constructor(public theme: ThemeService) { }

  ngOnInit(): void {
  }

  changeTheme() {
    this.colorTheme = this.theme.updateColorTheme();
    if (this.colorTheme === "light-mode") {
      let b:any = document.getElementsByTagName("html");
      let c:any = document.getElementsByTagName("body");
      let d:any = document.getElementsByClassName("bg-dark-l")
      b[0].classList.add("light-theme");
      c[0].classList.add("light-theme");
      d[0].classList.add("bg-light-l");
      d[0].classList.remove("bg-dark-l");
    } else {
      let b:any = document.getElementsByTagName("html");
      let c:any = document.getElementsByTagName("body");
      let d:any = document.getElementsByClassName("bg-dark-l")
      b[0].classList.remove("light-theme");
      c[0].classList.remove("light-theme");
      d[0].classList.add("bg-dark-l");
      d[0].classList.remove("bg-light-l");
    }
  }

}
