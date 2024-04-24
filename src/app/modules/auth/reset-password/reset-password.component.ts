import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { FuseValidators } from '@fuse/validators';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-reset-password',
    templateUrl: './reset-password.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthResetPasswordComponent implements OnInit {
    @ViewChild('resetPasswordNgForm') resetPasswordNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    resetPasswordForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private router: Router
    ) {
    }

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.resetPasswordForm = this._formBuilder.group({
            email: ['', Validators.required],
            newPassword: ['', Validators.required],
            passwordConfirm: ['', Validators.required],
            otp: ['', Validators.required],
        },
            {
                validators: FuseValidators.mustMatch('newPassword', 'passwordConfirm')
            }
        );
    }

    /**
     * Reset password
     */
    resetPassword(): void {
        // Return if the form is invalid
        if (this.resetPasswordForm.invalid) {
            return;
        }

        // Disable the form
        this.resetPasswordForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Extract values from the form
        const email = this.resetPasswordForm.get('email').value;
        const newPassword = this.resetPasswordForm.get('newPassword').value;
        const otp = this.resetPasswordForm.get('otp').value;

        // Send the request to the server
        this._authService.resetPassword({ email, newPassword, otp })
            .pipe(
                finalize(() => {
                    // Re-enable the form
                    this.resetPasswordForm.enable();

                    // Reset the form
                    this.resetPasswordNgForm.resetForm();

                    // Show the alert
                    this.showAlert = true;
                })
            )
            .subscribe(
                (response: any) => {
                    // Set the alert
                    this.alert = {
                        type: 'success',
                        message: response.message
                    };
                    this.router.navigateByUrl('/sign-in');
                },
                (error) => {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: 'Algo salió mal. Por favor, vuelva a intentarlo.'
                    };
                }
            );
    }

    forgetPassword() {
        this.router.navigateByUrl('/forgetPassword');
    }
}
