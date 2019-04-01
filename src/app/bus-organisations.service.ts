import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http'; //, HttpHeaders
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { BusOrganisation } from './busOrganisation';
//import { BUSORGANISATIONS } from './mock-busOrganisations';
import { MessageService } from './message.service';

export interface JsonFile {
  data: BusOrganisation[]; //data: {}[];
}

@Injectable({
  providedIn: 'root'
})

export class BusOrganisationsService {

  //URL to web api: Define the heroesUrl of the form :base/:collectionName with the address of the busOrganisations resource on the server.
  //Here base is the resource to which requests are made, and collectionName is the busOrganisations data object in the in-memory-data-service.ts.
  //private busOrganisationsUrl = 'api/busOrganisations';
  private jsonUrl = '../assets/bus-services-data.json';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  //cater for asynchronous download of JSON if from a Remote server
  //using Http GET
  getBusOrganisationsResponse(): Observable<HttpResponse<JsonFile>> {
    return this.http.get<JsonFile>(
      this.jsonUrl,
      {observe: 'response'}
    )
    .pipe(
      retry(3), // retry a failed request up to 3 times
      tap( _ => this.log('fetched business organisations') ),
      catchError(this.handleError)
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  /*
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
  */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      //console.error('An client-side or network error occurred');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BusOrganisationsService: ${message}`);
  }
}
