import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import {SidebarComponent} from "./component/sidebar/sidebar.component";
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContentComponent } from './component/content/content.component';
import { TypePageOneComponent } from './component/page/typescript/type-page-one/type-page-one.component';
import { TypePage2Component } from './component/page/typescript/type-page2/type-page2.component';
import { TypePage3Component } from './component/page/typescript/type-page3/type-page3.component';
import {AppRoutingModule, RoutingComponent } from "./app-routing/app-routing.module";
import { AngularPage1Component } from './component/page/angular/angular-page1/angular-page1.component';
import { AngularPage2Component } from './component/page/angular/angular-page2/angular-page2.component';
import { AngularPage3Component } from './component/page/angular/angular-page3/angular-page3.component';
import { AngularPage4Component } from './component/page/angular/angular-page4/angular-page4.component';
import { AngularPage5Component } from './component/page/angular/angular-page5/angular-page5.component';
import { AngularPage6Component } from './component/page/angular/angular-page6/angular-page6.component';
import { HomeContentComponent } from './component/page/trangchu/home-content/home-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    TypePageOneComponent,
    TypePage2Component,
    TypePage3Component,
    RoutingComponent,
    AngularPage1Component,
    AngularPage2Component,
    AngularPage3Component,
    AngularPage4Component,
    AngularPage5Component,
    AngularPage6Component,
    HomeContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
