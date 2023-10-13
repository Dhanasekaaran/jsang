import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy2RoutingModule } from './lazy2-routing.module';
import { Lazy2compComponent } from './lazy2comp/lazy2comp.component';


@NgModule({
  declarations: [
    Lazy2compComponent
  ],
  imports: [
    CommonModule,
    Lazy2RoutingModule
  ]
})
export class Lazy2Module {
  constructor() {
    console.log('Lazy loading module implemented.....');
  }
 }
