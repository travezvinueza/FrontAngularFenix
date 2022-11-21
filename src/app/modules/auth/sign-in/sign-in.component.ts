import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { AlertService } from 'app/shared/alert.service';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    signInForm: UntypedFormGroup;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
        public alertService: AlertService
    ) {
    }

    ngOnInit(): void {
        this.signInForm = this._formBuilder.group({
            user: ['', [Validators.required]],
            password: ['', Validators.required]
        });
    }

    signIn(): void {

        this.send()

        if (this.signInForm.invalid) {
            return;
        }

        this.signInForm.disable();
        this.alertService.showAlert = false;

        this._authService.signIn(this.signInForm.value)
            .subscribe(
                () => {
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                    this._router.navigateByUrl(redirectURL);
                }, (response) => {

                    this.signInForm.enable();

                    this.alertService.alert = {
                        type: 'error',
                        message: 'Error usuario o contraseña incorrectos'
                    };

                    this.alertService.showAlert = true;
                }
            );
    }

    send() {
        this._authService.send().subscribe(data => {
            alert(data)
        }, (error: HttpErrorResponse) => {
            this.alertService.alert = {
                type: 'success',
                message: 'peligro adevenretinca'
            };
            this.alertService.showAlert = true;
        })
    }
}
