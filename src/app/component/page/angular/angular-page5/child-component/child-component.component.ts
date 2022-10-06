import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() voteSize = new EventEmitter();
  public counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  clickAdd() {
    this.counter ++;
    this.voteSize.emit(this.counter);
  }
}
