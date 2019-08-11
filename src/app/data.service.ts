import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BusOrganisation } from './busOrganisation';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  jsonUrl = './assets/bus-services-data.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<BusOrganisation[]>(this.jsonUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError)
      );
  }

  /*
  getDataResponse(): Observable<HttpResponse<BusOrganisation[]>> {
    return this.http.get<BusOrganisation[]>(this.jsonUrl);
  }
  */

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
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
}
