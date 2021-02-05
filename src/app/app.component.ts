import { Component } from '@angular/core';
/* FA ICONS */
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'starter';
  
  faCoffee = faCoffee;
}
