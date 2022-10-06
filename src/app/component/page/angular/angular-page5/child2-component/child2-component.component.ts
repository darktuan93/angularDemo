import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-child2-component',
  templateUrl: './child2-component.component.html',
  styleUrls: ['./child2-component.component.css']
})
export class Child2ComponentComponent implements OnInit {
  @Input() valueInputNumber: any;
  constructor() { }

  ngOnInit(): void {
  }

}
