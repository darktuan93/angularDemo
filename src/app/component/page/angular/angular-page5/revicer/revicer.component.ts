import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../../services/data.service";


@Component({
  selector: 'app-revicer',
  templateUrl: './revicer.component.html',
  styleUrls: ['./revicer.component.css']
})
export class RevicerComponent implements OnInit {

  public dataHasRes: any

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.dataService.data.subscribe(response => {
      console.log(response);
      this.dataHasRes = response
    });
  }

  deletedArray() {
    this.dataHasRes = []
  }
}
