import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { data } from '../../assets/bus-services-data.json';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  // bus: Bus = {
  //   organisation: 'Northern Beaches',
  //   date: '2019/03/23',
  //   busData: [
  //     {
  //       id: 1,
  //       routeVariant: '123 ABC',
  //       deviationFromTimetable: 11
  //     }
  //   ]
  //};
  buses: Bus[] = data;

  constructor() { }

  ngOnInit() {

  }

}
