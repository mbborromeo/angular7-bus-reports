import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusOrganisationsComponent } from './busOrganisations/busOrganisations.component';
import { BusesComponent } from './buses/buses.component';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    BusOrganisationsComponent,
    BusesComponent,
    BusDetailComponent,
    DataComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    */
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
