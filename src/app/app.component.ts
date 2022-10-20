import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-YFVK6L5MYC', {'page_path': event.urlAfterRedirects});
      }
    })
  }

}
