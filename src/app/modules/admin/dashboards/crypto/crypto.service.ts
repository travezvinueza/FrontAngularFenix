import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AppSettings } from 'app/enviroments';
import { CompanyModel } from 'app/models/company.model';

@Injectable({
    providedIn: 'root'
})
export class CryptoService {
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);


    constructor(private _httpClient: HttpClient) {
    }


    get data$(): Observable<any> {
        return this._data.asObservable();
    }

    getData(): Observable<CompanyModel[]> {
        return this._httpClient.get<CompanyModel[]>(AppSettings.API_PATH.concat('/v1/company')).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
}
