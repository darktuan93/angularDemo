import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../../services/data.service";



@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  public selectLanguage: any = []

  public language: any = [
    {id: 1, name: 'Node JS'},
    {id: 2, name: 'React JS'},
    {id: 3, name: 'Angular'},
    {id: 4, name: 'VueJS'},
  ];

  constructor(
    public dataService: DataService
  ) {

  }

  ngOnInit(): void {
    this.sendDataToRxjs()
  }

  changeLeagueOwner($event: any) {
    console.log($event)
    this.selectLanguage = $event
  }

  sendDataToRxjs() {
    this.dataService.sendData(this.selectLanguage)
  }
}

