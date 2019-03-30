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
  busOrganisations: BusOrganisation[];
  headers: string[];
  jsonData: JsonFile;

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
    console.log("busOrganisations.component.ts: getBusOrganisations() INSIDE");
    debugger;
    this.busOrganisationsService.getBusOrganisations()
      // clone the data object, using its known BusOrganisation[] shape
      .subscribe(
        //(data) => this.busOrganisations = { ...data.data }
        //busOrganisations => this.busOrganisations = busOrganisations
        (dataObj: JsonFile) => this.dataImported = { ...dataObj.data }
      );
  }
  */

  /*
  showData() {
    console.log("busOrganisations.component - showData()")
    this.busOrganisationsService.getBusOrganisations()
      .subscribe(
        // (d: JsonFile) => this.dataImported = {
        //   data: d['data']
        // }
        (data: JsonFile) => this.dataImported = { ...data }//, // success path
        //error => this.error = error // error path
      );
  }
  */

  showDataResponse() {
    this.busOrganisationsService.getBusOrganisationsResponse()
      .subscribe(resp => { // resp is of type `HttpResponse<JsonFile>`
        // display its headers
        // const keys = resp.headers.keys();
        // this.headers = keys.map(key =>
        //   `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `JsonFile`.
        this.jsonData = { ... resp.body }; //this.jsonData
        this.busOrganisations = this.jsonData.data;
      });
  }

  /*
  ngOnInit() {
    this.getBusOrganisations();
  }
  */
  ngOnInit() {
    console.log("busOrganisations.component - ngOnInit");
    this.showDataResponse(); //showData
  }
}
