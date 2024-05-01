import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { FinanceService } from 'app/modules/admin/dashboards/finance/finance.service';
import { FormControl, NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AlertService } from 'app/shared/alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserCompanyModel, UserRole } from 'app/models/UserCompanyModel';

declare var $: any; //variable para darle movimiento al modal

@Component({
    selector: 'finance',
    templateUrl: './finance.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinanceComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('createCompanyNgForm') createCompanyNgForm: NgForm;
    @ViewChild('recentTransactionsTable', { read: MatSort }) recentTransactionsTableMatSort: MatSort;

    data: any;
    accountBalanceOptions: ApexOptions;
    recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource();
    recentTransactionsTableColumns: string[] = ['avatar', 'email', 'updatedAt', 'username', 'roles', 'actions'];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    createCompanyForm: UntypedFormGroup;
    roleId = new FormControl(0);


    constructor(
        private _financeService: FinanceService,
        private _formBuilder: UntypedFormBuilder,
        public alertService: AlertService,
    ) { }

    ngOnInit(): void {
        this.createCompanyForm = this._formBuilder.group({
            avatar: ['', Validators.required],
            email: ['', [Validators.required]],
            password: ['', Validators.required],
            username: ['', Validators.required],
            id: 0,
            roles: [],

        });
        this.getListUsers();
        this.roleId.setValue(0);

    }

    createUser() {
      

        this.createCompanyForm.disable();

        const userModel: UserCompanyModel = this.buildUserModel();

        this._financeService.createUser(userModel).subscribe(data => {
            this.createCompanyForm.enable();
            this.createCompanyForm.reset();
            this.createCompanyNgForm.resetForm();
            this.getListUsers();
            this.alertService.showAlertMessage('info', 'Usuario creado correctamente!');
        }, (response: HttpErrorResponse) => {
            this.alertService.showAlertMessage('error', response.error.message);
            this.createCompanyForm.enable();
        });
    }

    buildUserModel(): UserCompanyModel {
        const userRoles: UserRole[] = [{
            id: this.roleId.value,
            // Asegúrate de asignar valores adecuados para las demás propiedades de UserRole
            createdAt: new Date(),
            name: 'NombreDelRol',
            permissions: [],
            status: 'ACT',
            updatedAt: new Date(),
            version: 0
        }];

        const userModel: UserCompanyModel = {
            avatar: this.createCompanyForm.value.avatar,
            email: this.createCompanyForm.value.email,
            password: this.createCompanyForm.value.password,
            username: this.createCompanyForm.value.username,
            changePassword: false,
            createdAt: new Date(),
            id: 0,
            roles: userRoles,
            status: 'ACT',
            updatedAt: new Date(),
            version: 0
        };

        return userModel;
    }


    getListUsers() {
        this.data = []
        this.recentTransactionsDataSource.data = []
        this._financeService.getUsers().subscribe(data => {
            this.data = data;
            this.recentTransactionsDataSource.data = data.reverse();
        }, (response => {
            this.alertService.showAlertMessage('error', response.error.message)
        }))
    }

    getRoleName(company: UserCompanyModel): string {
        if (company.roles && company.roles.length > 0) {
            return company.roles[0].name;
        } 
    }


    clearFilters() {
        this.createCompanyForm.enable();
        this.createCompanyForm.reset()
        this.createCompanyNgForm.resetForm();
        this.alertService.hideAlertMessage()
    }

    ngAfterViewInit(): void {
        $('.modal-dialog').draggable({
            handle: ".modal-header"
        });

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
