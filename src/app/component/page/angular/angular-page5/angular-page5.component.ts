import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-angular-page5',
  templateUrl: './angular-page5.component.html',
  styleUrls: ['./angular-page5.component.css']
})
export class AngularPage5Component implements OnInit {

  public valueParent: any = 0

  constructor() {
  }

  ngOnInit(): void {
  }

  clickAdd($event: any) {
    console.log($event)
      this.valueParent = $event*10
  }


  valueInput(event: any) {
    console.log(event.target.value)
    this.valueParent = event.target.value
  }
}
