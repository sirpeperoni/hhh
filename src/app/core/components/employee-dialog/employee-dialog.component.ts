import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Education {
  value: string;
  viewValue: string;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  gender: string;
  company: string;
  experience: string;
  salary: string;
}

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss'],
})
export class EmployeeDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    education: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    experience: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
  });

  educations: Education[] = [
    { value: 'Среднее', viewValue: 'Среднее' },
    { value: 'Среднее полное', viewValue: 'Среднее полное' },
    { value: 'Среднее специальное', viewValue: 'Среднее специальное' },
    { value: 'Высшее', viewValue: 'Высшее' },
    { value: 'Магистр', viewValue: 'Магистр' },
  ];

  constructor(
    private dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee | undefined,
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.form.setValue(this.data);
    }
  }

  onFormSubmit() {
    if (this.form.valid) {
      // if (this.data) {
      //   this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
      //     next: (val: any) => {
      //       this._coreService.openSnackBar('Employee detail updated!');
      //       this._dialogRef.close(true);
      //     },
      //     error: (err: any) => {
      //       console.error(err);
      //     },
      //   });
      // } else {
      //   this._empService.addEmployee(this.empForm.value).subscribe({
      //     next: (val: any) => {
      //       this._coreService.openSnackBar('Employee added successfully');
      //       this._dialogRef.close(true);
      //     },
      //     error: (err: any) => {
      //       console.error(err);
      //     },
      //   });
      // }
    }
  }
}
