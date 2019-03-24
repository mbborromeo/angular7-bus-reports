import { Component, OnInit } from '@angular/core';
import { BusOrganisation } from '../busOrganisation';
import { data } from '../../assets/bus-services-data.json';

@Component({
  selector: 'app-busOrganisations',
  templateUrl: './busOrganisations.component.html',
  styleUrls: ['./busOrganisations.component.css']
})

export class BusOrganisationsComponent implements OnInit {
  busOrganisations: BusOrganisation[] = data;

  constructor() { }

  ngOnInit() {

  }
}
