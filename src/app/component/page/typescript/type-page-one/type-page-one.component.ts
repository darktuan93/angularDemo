import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-type-page-one',
  templateUrl: './type-page-one.component.html',
  styleUrls: ['./type-page-one.component.css']
})
export class TypePageOneComponent implements OnInit {

  public inputNumber: any

  constructor() {
  }

  ngOnInit(): void {


  }


  changeValue2(event: any) {
    console.log(typeof  event.target.value)
  }
}
