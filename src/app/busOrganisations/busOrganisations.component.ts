import { Component, OnInit } from '@angular/core';
import { BusOrganisation } from '../busOrganisation';
import { JsonFile, BusOrganisationsService } from '../bus-organisations.service';
//import { DataService } from '../data.service';

@Component({
  selector: 'app-busOrganisations',
  templateUrl: './busOrganisations.component.html',
  providers: [ BusOrganisationsService ],
  styleUrls: ['./busOrganisations.component.css']
})

export class BusOrganisationsComponent implements OnInit {
  //dataImported: JsonFile;
  //busOrganisations: BusOrganisation[];
  headers: string[];
  jsonData: JsonFile;
  //error: any;

  constructor(private busOrganisationsService: BusOrganisationsService) { }

  //cater for asynchronous download of JSON if from a Remote server
  /*
  getBusOrganisations(): void {
    this.busOrganisationsService.getBusOrganisations()
      .subscribe( busOrganisations => this.busOrganisations = busOrganisations );
  }
  */

  /*
  getBusOrganisations(): void {
    this.busOrganisationsService.getBusOrganisations()
      // clone the data object, using its known BusOrganisation[] shape
      .subscribe(
        (dataObj: JsonFile) => this.dataImported = { ...dataObj.data }
      );
  }
  */

  /*
  getBusOrganisationsResponse() {
    console.log("busOrganisations.component - showData()")
    this.busOrganisationsService.getBusOrganisations()
      .subscribe(
        (data: JsonFile) => this.dataImported = { ...data }//, // success path
        //error => this.error = error // error path
      );
  }
  */

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
          //this.busOrganisations = this.jsonData.data;
        }//,  success path
        //error => this.error = error // error path
      );
  }

  ngOnInit() {
    this.getBusOrganisationsResponse();
  }
}
