import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  public headers = new HttpHeaders()
    .set('X-Auth-Token', environment.API_KEY);

  constructor(public httpClient: HttpClient) { }

  getAllCompetition() {
    const url = environment.baseUrl + '/competitions/';

    return this.httpClient.get<any>(url, { headers: this.headers })
      .pipe(catchError(this.errorHandler));
  }

  getStandingsPerCompetition(competitionId: number) {
    const url = environment.baseUrl + '/competitions/' + competitionId + '/standings';

    return this.httpClient.get<any>(url, { headers: this.headers })
      .pipe(catchError(this.errorHandler));
  }

  getMatchesPerCompetition(competitionId: number) {
    const url = environment.baseUrl + '/competitions/' + competitionId + '/matches';

    return this.httpClient.get<any>(url, { headers: this.headers })
      .pipe(catchError(this.errorHandler));
  }

  // Error Handler
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
