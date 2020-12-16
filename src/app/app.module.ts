import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OperatorListComponent } from './operators/operator-list/operator-list.component';
import { OperatorDetailsComponent } from './operators/operator-details/operator-details.component';
import { OperatorRowComponent } from './operators/operator-row/operator-row.component';
import { LoadoutListComponent } from './loadouts/loadout-list/loadout-list.component';
import { LoadoutDetailsComponent } from './loadouts/loadout-details/loadout-details.component';
import { LoadoutRowComponent } from './loadouts/loadout-row/loadout-row.component';
import { CtuListComponent } from './ctus/ctu-list/ctu-list.component';
import { CtuDetailsComponent } from './ctus/ctu-details/ctu-details.component';
import { CtuRowComponent } from './ctus/ctu-row/ctu-row.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OperatorFormComponent } from './operators/operator-form/operator-form.component';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { UserService } from './user.service';
import { appInitializer } from './helpers/app.initializer';

@NgModule({
  declarations: [
    AppComponent,
    OperatorListComponent,
    OperatorDetailsComponent,
    OperatorRowComponent,
    LoadoutListComponent,
    LoadoutDetailsComponent,
    LoadoutRowComponent,
    CtuListComponent,
    CtuDetailsComponent,
    CtuRowComponent,
    OperatorFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [UserService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
