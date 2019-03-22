import { Component } from '@angular/core';
import { data } from '../assets/bus-services-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bus Reports';
  data = data;
}
