import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from '../../core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  error: string | undefined = undefined;

  form = new UntypedFormGroup({
    login: new UntypedFormControl('', Validators.required),
    password: new UntypedFormControl('', Validators.required),
  });

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private readonly authService: AuthService,
  ) {}

  submit() {
    if (this.form.valid) {
      this.error = undefined;
      this.authService
        .login(this.form.value)
        .pipe(
          tap(() => this.router.navigate(['/main'])),
          catchError(err => {
            this.error = err.message;
            return throwError(() => err);
          }),
        )
        .subscribe();
    }
  }
}
