import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, } from 'rxjs/operators';
import {
  Keeper
} from './keeper-interface';

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
        }));
      })
    );
  }
}
