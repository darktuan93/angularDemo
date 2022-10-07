import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SenderComponent} from './sender/sender.component';
import {RevicerComponent} from './revicer/revicer.component';
import {ShareModuleModule} from "../../../../share-module/share-module.module";



@NgModule({
  declarations: [
    SenderComponent,
    RevicerComponent,
  ],
  exports: [
    SenderComponent,
    RevicerComponent,

  ],
  imports: [
    CommonModule,
    ShareModuleModule,

  ]
})
export class AngularPage5Module {
}
