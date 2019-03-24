import { Component, OnInit } from '@angular/core';
import { BusOrganisation } from '../busOrganisation';
import { BusOrganisationsService } from '../bus-organisations.service';

@Component({
  selector: 'app-busOrganisations',
  templateUrl: './busOrganisations.component.html',
  styleUrls: ['./busOrganisations.component.css']
})

export class BusOrganisationsComponent implements OnInit {
  busOrganisations: BusOrganisation[];

  constructor(private busOrganisationsService: BusOrganisationsService) { }

  //cater for asynchronous download of JSON if from a Remote server
  getBusOrganisations(): void {
    this.busOrganisationsService.getBusOrganisations()
      .subscribe( busOrganisations => this.busOrganisations = busOrganisations );
  }

  ngOnInit() {
    this.getBusOrganisations();
  }
}
