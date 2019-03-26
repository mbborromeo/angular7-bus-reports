import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusOrganisation } from './busOrganisation';
import { BUSORGANISATIONS } from './mock-busOrganisations';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class BusOrganisationsService {

  constructor(private messageService: MessageService) { }

  //cater for asynchronous download of JSON if from a Remote server
  getBusOrganisations(): Observable<BusOrganisation[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('BusOrganisationsService: fetched BUSORGANISATIONS');
    return of(BUSORGANISATIONS);
  }
}
