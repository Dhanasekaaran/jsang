import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazy2compComponent } from './lazy2comp/lazy2comp.component';

const routes: Routes = [
  { path:'lazyload', component:Lazy2compComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy2RoutingModule { }
