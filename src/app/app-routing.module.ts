import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorListComponent } from './operators/operator-list/operator-list.component';

const routes: Routes = [ 
  {path: "operator-list-component",
   component: OperatorListComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }