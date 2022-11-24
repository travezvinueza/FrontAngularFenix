import { CompanyModel } from './../../../../models/company.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AppSettings } from 'app/enviroments';

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

    createCompany(companyModel: CompanyModel): Observable<CompanyModel> {
        return this._httpClient.post(AppSettings.API_PATH + '/v1/company/create', companyModel)
    }
}
