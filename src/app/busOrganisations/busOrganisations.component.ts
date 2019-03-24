import { Component, OnInit } from '@angular/core';
import { BUSORGANISATIONS } from '../mock-busOrganisations';

@Component({
  selector: 'app-busOrganisations',
  templateUrl: './busOrganisations.component.html',
  styleUrls: ['./busOrganisations.component.css']
})

export class BusOrganisationsComponent implements OnInit {
  busOrganisations = BUSORGANISATIONS;

  constructor() { }

  ngOnInit() {

  }
}
