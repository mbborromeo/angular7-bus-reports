import { Component, OnInit } from '@angular/core';
import { BusOrganisation } from '../busOrganisation';
import { DataService } from '../data.service'; // Data,

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  error: any;
  headers: string[];
  jsonData: BusOrganisation[];

  constructor(private dataService: DataService) { }

  showData() {
    this.dataService.getData()
      // clone the data object, using its known BusOrganisation[] shape
      .subscribe(
        (data: BusOrganisation[]) => this.jsonData = { ...data } // success path
        //error => this.error = error // error path
      );
  }

  // showDataResponse() {
  //   this.dataService.getDataResponse()
  //     // resp is of type `HttpResponse<BusOrganisation[]>`
  //     .subscribe(
  //       resp => {
  //         // display its headers
  //         /*
  //         for(let r=0; r < resp.length ; r++){
  //           resp[r].
  //         }
  //         */

  //         const keys = resp.headers.keys();
  //         this.headers = keys.map(
  //           key => `${key}: ${resp.headers.get(key)}`
  //         );

  //         // access the body directly, which is typed as `Config`.
  //         this.jsonData = { ... resp.body };
  //       }
  //     );
  // }

  ngOnInit() {
  }

}
