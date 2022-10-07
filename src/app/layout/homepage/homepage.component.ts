import {Component, OnInit} from '@angular/core';
import {GuidedTour, Orientation, GuidedTourService} from 'ngx-guided-tour';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  showbutton = false;
  step3 = false;
  step4 = false;

  public dashboardTour: GuidedTour = {
    tourId: 'purchases-tour',
    useOrb: false,
    skipCallback: (stepSkippedOn: number) => {
      console.log('skip callback called');
    },
    completeCallback: () => {
      console.log('Complete callback called');
    },
    steps: [
      {
        title: 'HTML/CSS',
        selector: '.html-css',
        content: `<p>Hướng dẫn HTML CSS</p>`,
        orientation: Orientation.Right,
        action: () => {
        }
      },
      {
        title: 'javascript',
        selector: '.javascript',
        content: 'Hướng dẫn javascipt',
        orientation: Orientation.Right,
        action: () => {
        }
      },
      {
        title: 'Thông tin trang chủ',
        content: 'Cảm ơn',
        closeAction: () => {
        }
      },

    ]
  };

  constructor(
    private guidedTourService: GuidedTourService,
  ) {
  }

  ngOnInit(): void {
    this.showbutton = true
  }

  restartTour() {
    this.guidedTourService.startTour(this.dashboardTour);
  }
}
