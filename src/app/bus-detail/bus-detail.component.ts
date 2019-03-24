import { Component, OnInit, Input } from '@angular/core';
import { BusDetail } from '../bus-detail';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {
  @Input() busDataArray: BusDetail[];

  constructor() { }

  ngOnInit() {

  }
}
