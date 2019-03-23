import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { data } from '../../assets/bus-services-data.json';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})

export class BusesComponent implements OnInit {
  buses: Bus[] = data;

  constructor() { }

  ngOnInit() {

  }
}
