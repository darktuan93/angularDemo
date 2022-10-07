import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-page4',
  templateUrl: './angular-page4.component.html',
  styleUrls: ['./angular-page4.component.css']
})
export class AngularPage4Component implements OnInit {

  public danhSachNumber: any = 0

  constructor() {
  }

  ngOnInit(): void {

  }

  inputNumber($event: any) {
    // console.log($event.target.value)
    this.danhSachNumber = $event.target.value
  }
}
