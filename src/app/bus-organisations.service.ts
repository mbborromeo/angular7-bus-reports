import { Injectable } from '@angular/core';
import { BusOrganisation } from './busOrganisation';
import { BUSORGANISATIONS } from './mock-busOrganisations';

@Injectable({
  providedIn: 'root'
})

export class BusOrganisationsService {

  constructor() { }

  getBusOrganisations(): BusOrganisation[] {
    return BUSORGANISATIONS;
  }
}
