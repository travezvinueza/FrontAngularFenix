import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'app/enviroments';
import { CompanyModel } from 'app/models/company.model';
import { map } from 'lodash';
import { catchError, delayWhen, Observable, of, retryWhen, shareReplay, switchMap, tap, throwError, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  genericSearchApi: any[] = [
    { key: 'company', apiValue: '/v1/company/search' },
    { key: 'persons', apiValue: '/v1/persons/search' },
    { key: 'proyect', apiValue: '/v1/proyect/search' }
  ]

  constructor(private _httpClient: HttpClient) {
  }

  genericSearch(searchValue: string, apiKey: string): Observable<any[]> {
    const filterApiSearch = this.genericSearchApi.filter(api => api.key == apiKey)[0]
    return this._httpClient.get<any[]>(AppSettings.API_PATH + filterApiSearch.apiValue, { params: { searchValue } }).pipe(
      switchMap((response: any) => {
        if (response.length == 0) {
          return throwError('Empty data');
        }
        return of(response);
      }),
      catchError(error => {
        return throwError('Error connection api', error);
      })
    )
  }

}
