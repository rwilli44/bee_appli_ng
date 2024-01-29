import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, } from 'rxjs/operators';
import { HivesResponse } from '../hive-interface';

@Injectable({
  providedIn: 'root'
})

export class GetHivesService {
  /**
   * Error handler in case of failed HTTPRequest.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
  private hivesUrl = "http://127.0.0.1:8000/public_api/hives/";

  getHives(url?: string): Observable<HivesResponse> {
    return this.http.get<HivesResponse>(url || this.hivesUrl).pipe(
      map((response) => ({
        next: response.next,
        previous: response.previous,
        results: response.results.map((hiveInfo: any) => ({
          id: hiveInfo.id,
          name: hiveInfo.name,
          status: hiveInfo.status,
          species: hiveInfo.species,
          beeyard_id: hiveInfo.beeyard_id,
          beekeeper_id: hiveInfo.beekeeper_detail.public_beekeeper_info
        })),
      })),
      catchError(this.handleError<HivesResponse>('getHives', { results: [], next: null, previous: null }))
    );
  }
}



