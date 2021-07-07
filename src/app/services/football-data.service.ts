import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {
  public API_KEY = 'd725e2a1ce764b14b80d50d4f79da6e4';
  public headers = new HttpHeaders()
    .set('X-Auth-Token', this.API_KEY);
  public baseUrl = 'https://api.football-data.org/v2';

  constructor(public httpClient: HttpClient) { }

  getTodaysMatch() {
    const url = this.baseUrl + '/matches';

    return this.httpClient.get<any>(url, {headers: this.headers})
      .pipe(catchError(this.errorHandler));
  }

  getAllCompetition() {
    const url = this.baseUrl + '/competitions/';

    return this.httpClient.get<any>(url, {headers: this.headers})
      .pipe(catchError(this.errorHandler));
  }

  getStandingsPerCompetition(competitionId: number) {
    const url = this.baseUrl + '/competitions/' + competitionId +'/standings';

    return this.httpClient.get<any>(url, {headers: this.headers})
      .pipe(catchError(this.errorHandler));
  }

  getMatchesPerCompetition(competitionId: number) {
    const url = this.baseUrl + '/competitions/' + competitionId +'/matches';

    return this.httpClient.get<any>(url, {headers: this.headers})
      .pipe(catchError(this.errorHandler));
  }

  // Error Handler
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
