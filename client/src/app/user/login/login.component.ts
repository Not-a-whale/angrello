import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {TextInputComponent} from "../../shared/text-input/text-input.component";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButton, MatCard, MatError, MatFormField, MatInput, MatLabel, TextInputComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService) {
    this.form = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.service.signin(this.form.value).subscribe({
        next: (res: any) => {
            this.authService.saveToken(res.token);
            this.router.navigateByUrl('/dashboard');
        },
        error: (err: any) => {
          console.error(err);
          if (err.status === 400) {
            this.toastr.error('Incorrect email or password', 'Authentication failed');
          } else {
            this.toastr.error('Something went wrong', 'Authentication failed');
          }
        }
      });
    }
  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value === control.get('confirmPassword')?.value ? null : {mismatch: true};
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
