import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusOrganisation } from './busOrganisation';
import { BUSORGANISATIONS } from './mock-busOrganisations';

@Injectable({
  providedIn: 'root'
})

export class BusOrganisationsService {

  constructor() { }

  //cater for asynchronous download of JSON if from a Remote server
  getBusOrganisations(): Observable<BusOrganisation[]> {
    return of(BUSORGANISATIONS);
  }
}
