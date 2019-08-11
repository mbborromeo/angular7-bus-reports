import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http'; //, HttpHeaders
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { BusOrganisation } from './busOrganisation';
//import { BUSORGANISATIONS } from './mock-busOrganisations';
import { MessageService } from './message.service';

export interface JsonFile {
  data: BusOrganisation[];
}

@Injectable({
  providedIn: 'root'
})

export class BusOrganisationsService {
  private jsonUrl = '../assets/bus-services-data.json';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  //using Http GET for asynchronous download of JSON if from a Remote server
  getBusOrganisationsResponse(): Observable<HttpResponse<JsonFile>> {
    return this.http.get<JsonFile>(
      this.jsonUrl,
      {observe: 'response'}
    )
    .pipe(
      retry(3), //retry a failed request up to 3 times
      tap( _ => this.log('fetched business organisations') ),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      //The backend returned an unsuccessful response code.
      //The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    //return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  //Log a bus-organisations Service message with the MessageService
  private log(message: string) {
    this.messageService.add(`BusOrganisationsService: ${message}`);
  }
}
