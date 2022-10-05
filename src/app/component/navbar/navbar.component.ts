import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public timePick: any

  constructor() {
  }

  ngOnInit(): void {
    let intervalId
    intervalId = setInterval(() => {
      this.timePick = moment().format('Do MMMM YYYY / h:mm:ss A');
      // console.log(this.time)
    }, 1000);
  }


}
