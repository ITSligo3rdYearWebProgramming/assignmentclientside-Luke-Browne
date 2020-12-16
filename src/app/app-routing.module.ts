import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorListComponent } from './operators/operator-list/operator-list.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { CtuDetailsComponent } from './ctus/ctu-details/ctu-details.component';
import { LoadoutDetailsComponent } from './loadouts/loadout-details/loadout-details.component';

const routes: Routes = [ 
  {path: 'operator-list-component', component: OperatorListComponent, canActivate: [AuthGuard]},
  {path: 'ctu-list-component', component: CtuDetailsComponent},
  {path: 'loadout-list-component', component: LoadoutDetailsComponent},
  {path: 'login', component: LoginComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }