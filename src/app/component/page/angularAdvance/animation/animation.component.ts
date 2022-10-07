import {Component, OnInit} from '@angular/core';
import {trigger, transition, animate, style, keyframes, state} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('animationTest', [
      transition(':enter', [
        style({transform: 'scale(0.4)', opacity: 0.4, background: 'red'}),
        animate('1000ms ease-in', style({transform: 'scale(1)', 'opacity': 0.7}))
      ]),
    ]),
    trigger('animationTest2', [
      state('state1', style({
        color: 'black',
        transform: 'scale(1.5)'
      })),
      state('state2', style({
        color: 'black',
        transform: 'scale(0.5)'
      })),
      state('state3', style({
        color: 'blue',
        transform: 'scale(1.1)'
      })),
      transition('state2=>state1', animate('2000ms')),
      transition('state1=>state2', animate('2000ms')),

      transition('state1=>state3', animate('5s', keyframes([
          style({transform: 'translateX(-74%)'}),
          style({transform: 'translateY(100%)'}),
          style({transform: 'translateX(0%)'})
        ])),
      ),


      transition('state2=>state3', animate('5s', keyframes([
          style({transform: 'translateX(74%)'}),
          style({transform: 'translateY(100%)'}),
          style({transform: 'translateX(0%)'})
        ])),
      )

    ])
  ]
})
export class AnimationComponent implements OnInit {
  show: boolean = true
  public animationState: any

  constructor() {
  }

  ngOnInit(): void {
    this.animationState = 'state2'

  }

  toggle($event: any) {
    this.show = !this.show;
  }

  toggle2($event: MouseEvent) {
    this.animationState = 'state1'
  }

  checkValue() {
    console.log('tét')
    this.animationState = 'state3'
  }
}
