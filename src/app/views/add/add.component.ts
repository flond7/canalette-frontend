import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
/* FA ICONS */
import { faUser, faWater, faCalendar, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  faUser = faUser;
  faWater = faWater;
  faCalendar = faCalendar;
  faPlus = faPlus;
  tab = 'user';

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  addJoined() {
    //paid 1 for true
    let data = {
      "amount": 100, 
      "paid":1, 
      "id_drain":3, 
      "id_user":2, 
      "id_year":2020
    }
    
    this.api.createRelational(data).subscribe(res => console.log(res))

  }

}
