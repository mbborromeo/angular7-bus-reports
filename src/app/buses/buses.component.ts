import { Component, OnInit, Input } from '@angular/core';
import { Bus } from '../bus';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  @Input() busesWithinOrganisation: Bus[];

  constructor() { }

  ngOnInit() {

  }
}
