import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
//import { BUSORGANISATIONS } from './mock-busOrganisations';
import { data } from '../assets/bus-services-data.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const busOrganisations = data; //BUSORGANISATIONS

    return {busOrganisations};
  }
}
