import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusOrganisation } from './busOrganisation';
import { BUSORGANISATIONS } from './mock-busOrganisations';

@Injectable({
  providedIn: 'root'
})

export class BusOrganisationsService {

  constructor() { }

  getBusOrganisations(): Observable<BusOrganisation[]> {
    return of(BUSORGANISATIONS);
  }
}
