import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup
} from '@angular/forms';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginForm!: FormGroup;

  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {

    // INITIALIZE HERE
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.loginForm.invalid) return;

    this.loading = true;

    this.auth.login(this.loginForm.value).subscribe({

      next: (res: any) => {

        this.loading = false;

        localStorage.setItem('token', res.token);

        localStorage.setItem(
          'profile',
          JSON.stringify(res.user.profile)
        );

        this.router.navigate(['/dashboard']);
      },

      error: (err: any) => {

        this.loading = false;

        this.error =
          err.error?.message || 'Login Failed';
      }
    });
  }
}