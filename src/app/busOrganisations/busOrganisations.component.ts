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

  getBusOrganisations(): void {
    this.busOrganisations = this.busOrganisationsService.getBusOrganisations();
  }

  ngOnInit() {
    this.getBusOrganisations();
  }
}
