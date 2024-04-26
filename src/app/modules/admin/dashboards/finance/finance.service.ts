import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { AppSettings } from 'app/enviroments';
import { UserCompanyModel } from 'app/models/UserCompanyModel';

@Injectable({
    providedIn: 'root'
})
export class FinanceService {
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);

    baseUrl = AppSettings.API_PATH;
    createApi = this.baseUrl + '/v1/security/user';

    
    constructor(private _httpClient: HttpClient) {
    }

    createUser(user: UserCompanyModel): Observable<UserCompanyModel> {
        return this._httpClient.post<UserCompanyModel>(`${this.createApi}/create`, user)
          .pipe(
            catchError(error => {
              throw error;
            })
          );
      }


    getUsers(): Observable<UserCompanyModel[]> {
        return this._httpClient.get<UserCompanyModel[]>(`${this.createApi}`).pipe(
            tap((response: UserCompanyModel[]) => {
                this._data.next(response);
            })
        );
    }

  
    get data$(): Observable<any> {
        return this._data.asObservable();
    }

    getData(): Observable<any> {
        return this._httpClient.get('api/dashboards/finance').pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
}
