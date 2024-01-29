import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, } from 'rxjs/operators';
import {
  Keeper
} from '../keeper-interface';

@Injectable({
  providedIn: 'root'
})
export class GetKeepersService {

  constructor(private http: HttpClient) { }
  private keepersUrl = "http://127.0.0.1:8000/public_api/beekeepers/";

  getKeepers(): Observable<Keeper[]> {

    return this.http.get<any>(this.keepersUrl).pipe(
      map((response) => {
        return response.results.map((beekeeperInfo: any) => ({
          id: beekeeperInfo.public_beekeeper_info,
          first_name: beekeeperInfo.public_beekeeper_info_details.first_name,
          last_name: beekeeperInfo.public_beekeeper_info_details.last_name,
          email: beekeeperInfo.public_beekeeper_info_details.email,
        }))
      }),
      catchError(this.handleError<Keeper[]>('updateHero', [])
      )
    );
  }

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
}
