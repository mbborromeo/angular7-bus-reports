import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //, HttpHeaders
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BusOrganisation } from './busOrganisation';
//import { BUSORGANISATIONS } from './mock-busOrganisations';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class BusOrganisationsService {

  //URL to web api: Define the heroesUrl of the form :base/:collectionName with the address of the busOrganisations resource on the server.
  //Here base is the resource to which requests are made, and collectionName is the busOrganisations data object in the in-memory-data-service.ts.
  private busOrganisationsUrl = 'api/busOrganisations';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  //cater for asynchronous download of JSON if from a Remote server
  //using Http GET
  getBusOrganisations(): Observable<BusOrganisation[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('BusOrganisationsService: fetched BUSORGANISATIONS');
    // return of(BUSORGANISATIONS);
    return this.http.get<BusOrganisation[]>(this.busOrganisationsUrl)
      .pipe(
        tap(_ => this.log('fetched business organisations')),
        catchError(this.handleError<BusOrganisation[]>('getBusOrganisations', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BusOrganisationsService: ${message}`);
  }
}
