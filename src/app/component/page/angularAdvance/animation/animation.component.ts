import {Component, OnInit} from '@angular/core';
import {trigger, transition, animate, style, state} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('animationTest', [
      transition(':enter', [
        style({transform: 'scale(0.4)', opacity: 0.4,background:'red'}),
        animate('1000ms ease-in', style({transform: 'scale(1)', 'opacity': 0.7}))
      ]),
    ])
  ]
})
export class AnimationComponent implements OnInit {
  show: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle($event: any) {
    this.show = !this.show;
  }
}
