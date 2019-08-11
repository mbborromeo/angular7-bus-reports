import { Component, OnInit } from '@angular/core';
import { BusOrganisation } from '../busOrganisation';
import { JsonFile, BusOrganisationsService } from '../bus-organisations.service';
<<<<<<< HEAD
import { InMemoryDbService } from 'angular-in-memory-web-api';
=======
>>>>>>> 9f8a41545327575e06c0105e6b3960c212f7c549

@Component({
  selector: 'app-busOrganisations',
  templateUrl: './busOrganisations.component.html',
  providers: [ BusOrganisationsService ],
  styleUrls: ['./busOrganisations.component.css']
})

export class BusOrganisationsComponent implements OnInit {
  headers: string[];
  jsonData: JsonFile;
  //error: any;

  constructor(private busOrganisationsService: BusOrganisationsService) { }

  //cater for asynchronous download of JSON if from a Remote server
  getBusOrganisationsResponse() {
    this.busOrganisationsService.getBusOrganisationsResponse()
      .subscribe(
        resp => { // resp is of type `HttpResponse<JsonFile>
          // display its headers
          // const keys = resp.headers.keys();
          // this.headers = keys.map(key =>
          //   `${key}: ${resp.headers.get(key)}`);

          // access the body directly, which is typed as `JsonFile`.
          this.jsonData = { ... resp.body };
        }//, // success path
        //error => this.error = error // error path
      );
  }

  ngOnInit() {
    this.getBusOrganisationsResponse();
  }
}
