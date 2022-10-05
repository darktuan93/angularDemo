import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TypePageOneComponent} from "../component/page/typescript/type-page-one/type-page-one.component";
import {TypePage2Component} from "../component/page/typescript/type-page2/type-page2.component";
import {TypePage3Component} from "../component/page/typescript/type-page3/type-page3.component"
import {AngularPage1Component} from "../component/page/angular/angular-page1/angular-page1.component";
import {AngularPage2Component} from "../component/page/angular/angular-page2/angular-page2.component";
import {AngularPage3Component} from "../component/page/angular/angular-page3/angular-page3.component";
import {AngularPage4Component} from "../component/page/angular/angular-page4/angular-page4.component";
import {AngularPage5Component} from "../component/page/angular/angular-page5/angular-page5.component";
import {AngularPage6Component} from "../component/page/angular/angular-page6/angular-page6.component";
import {HomeContentComponent} from "../component/page/trangchu/home-content/home-content.component";


const routes: Routes = [
  {path: ``, component: HomeContentComponent},
  {path: `typepage1`, component: TypePageOneComponent},
  {path: "typepage2", component: TypePage2Component},
  {path: "typepage3", component: TypePage3Component},
  //
  {path: "angular1", component: AngularPage1Component},
  {path: "angular2", component: AngularPage2Component},
  {path: "angular-databinding", component: AngularPage3Component},
  {path: "angular4", component: AngularPage4Component},
  {path: "angular5", component: AngularPage5Component},
  {path: "angular6", component: AngularPage6Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const RoutingComponent = [TypePageOneComponent, TypePage2Component, TypePage3Component];
