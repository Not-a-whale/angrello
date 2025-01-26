import {Component, inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard} from '@angular/material/card';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {JsonPipe} from '@angular/common';
import {TextInputComponent} from "../../shared/text-input/text-input.component";
import {AuthWrapperComponent} from "../auth-wrapper/auth-wrapper.component";
import {AuthService} from "../../shared/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    AuthWrapperComponent,
    ReactiveFormsModule,
    MatCard,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    JsonPipe,
    MatError,
    TextInputComponent,
    RouterLink,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService) {
    this.form = formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*[^a-zA-Z0-9])/)]],
      confirmPassword: [''],
    }, {validators: this.passwordMatchValidator});
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.service.createUser(this.form.value).subscribe({
        next: (res: any) => {
          if (res.succeeded) {
            this.form.reset();
            this.isSubmitted = false;

            console.log('res', res);
            this.toastr.success('User created successfully');
          } else {

          }
        },
        error: (err) => this.toastr.error(err.error.errors.map((e: any) => e.description).join('\n'))
      });
    }
  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value === control.get('confirmPassword')?.value ? null : {mismatch: true};
  }

  ngOnInit() {
    if (this.service.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
