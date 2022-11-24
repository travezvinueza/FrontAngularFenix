import { CompanyModel } from 'app/models/company.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from 'app/shared/alert.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { CryptoService } from 'app/modules/admin/dashboards/crypto/crypto.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LegalRepresentativeModel, Person } from 'app/models/legal.representative.model';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'crypto',
    templateUrl: './crypto.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations
})
export class CryptoComponent implements OnInit, OnDestroy {

    @ViewChild('registerCompanyNgForm') registerCompanyNgForm: NgForm;
    @ViewChild('recentTransactionsTable', { read: MatSort }) recentTransactionsTableMatSort: MatSort;

    data: any;
    accountBalanceOptions: ApexOptions;
    recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource();
    recentTransactionsTableColumns: string[] = ['name', 'commercialName', 'document', 'mobile', 'status', 'actions'];
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    registerCompanyForm: UntypedFormGroup;

    constructor(
        private _cryptoService: CryptoService,
        private _formBuilder: UntypedFormBuilder,
        public alertService: AlertService
    ) {
    }

    ngOnInit(): void {
        this.alertService.showAlert = false
        this.registerCompanyForm = this._formBuilder.group({
            name: ['', Validators.required],
            commercialName: ['', [Validators.required]],
            document: ['', Validators.required],
            phone: ['', Validators.required],
            mobile: ['', Validators.required],
            representativeName: ['', Validators.required],
            representativeLastname: ['', Validators.required],
            representativeDocument: ['', Validators.required],
        }
        );

        this.getAllCompanies()
    }

    getAllCompanies() {
        this._cryptoService.getData().subscribe(data => {
            this.data = data;
            this.recentTransactionsDataSource.data = data.reverse();
        }, (response => {
            this.alertService.viewMessage('error', response.error.message, true)
        }))
    }

    createCompany() {
        if (this.registerCompanyForm.invalid) {
            this.alertService.viewMessage('error', 'Debe de completar todos los campos', true)
            return
        }

        this.registerCompanyForm.disable();

        const person: Person = {
            name: this.registerCompanyForm.value.representativeName,
            lastName: this.registerCompanyForm.value.representativeLastname,
            document: this.registerCompanyForm.value.representativeDocument
        }

        const legal: LegalRepresentativeModel = {
            person: person
        }

        const companyModel: CompanyModel = {
            name: this.registerCompanyForm.value.name,
            commercialName: this.registerCompanyForm.value.commercialName,
            document: this.registerCompanyForm.value.document,
            mobile: this.registerCompanyForm.value.mobile,
            phone: this.registerCompanyForm.value.mobile,
            legalRepresentative: legal,
        }

        this._cryptoService.createCompany(companyModel).subscribe(data => {
            this.alertService.viewMessage('success', 'Registro creado exitosamente', true)
            this.registerCompanyForm.enable();
            this.registerCompanyForm.reset()
            this.registerCompanyNgForm.resetForm();
            this.getAllCompanies()
        }, (response: HttpErrorResponse) => {
            this.alertService.viewMessage('error', response.error.message, true)
            this.registerCompanyForm.enable()
        })
    }

    clear() {
        this.registerCompanyForm.enable();
        this.registerCompanyForm.reset()
        this.registerCompanyNgForm.resetForm();
        this.alertService.showAlert = false
    }

    ngAfterViewInit(): void {
        this.recentTransactionsDataSource.sort = this.recentTransactionsTableMatSort;
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

}
