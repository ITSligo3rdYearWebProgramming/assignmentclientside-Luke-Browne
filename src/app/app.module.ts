import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { HttpClientModule } from '@angular/common/http';

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
    CtuRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
