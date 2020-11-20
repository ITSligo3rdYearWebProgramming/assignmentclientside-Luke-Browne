import { Injectable } from '@angular/core';
import { IOperator } from './model/operator'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  private dataUri = 'http://localhost:3000/operators'

  constructor(private http: HttpClient) { }

  addOperator(operator: IOperator): Observable<IOperator> {
    return this.http.post<IOperator>(this.dataUri, operator)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateOperator(id: string, operator: IOperator): Observable<IOperator> {
    console.log('subscribing to update' + id);
    let operatorURI: string = this.dataUri + '/' + id;
    return this.http.put<IOperator>(operatorURI, operator)
      .pipe(
        catchError(this.handleError)
      )
  }

  getOperators(): Observable<IOperator[]> {

    console.log("get operators called" );



    return this.http.get<IOperator[]>(`${this.dataUri}?limit=5`)
      .pipe(
        catchError(this.handleError)
      )
  }

  //taken from: https://angular.io/guide/http

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

      // question over how much information you want to give to the end-user
      // it depends on who will be using the system
      // this information would not be returned in a public interface but might in an intranet.

      if (error.status == 412) {
        return throwError('412 Error' + JSON.stringify(error.error))
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}