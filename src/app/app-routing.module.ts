import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path:'hello', component:HelloComponent},
  {path:'hello/:val', component:HelloComponent},
  {path:'child',component:ChildComponent},
  {path:'lazyload', loadChildren:() => import('./lazy2/lazy2.module').then(m => m.Lazy2Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
