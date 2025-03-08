import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from '../../core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  form = new UntypedFormGroup({
    login: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required),
  });

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private readonly authService: AuthService,
  ) {}

  submit(): Observable<any> {
    return this.authService.signUp(this.form.value).pipe(
      catchError(err => {
        this.snackbar.open(err.message);
        return throwError(() => err);
      }),
    );
  }
}
