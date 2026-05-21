import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup {
  signupForm: FormGroup;
  designations = ['DOCTOR', 'NURSE', 'RECEPTIONIST', 'ADMIN', 'CASHIER', 'LAB_TECH', 'PHARMACIST'];
  departments = ['OPD', 'IPD', 'Lab', 'Pharmacy', 'Admin'];

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.signupForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]], // personal email
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        designation: ['', Validators.required],
        department: ['', Validators.required],
        qualification: [''],
        specialization: [''],
        medicalRegistrationNumber: [''],
        consultationFee: [0],
        joiningDate: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        availabilitySlots: this.fb.array([]),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  get availabilitySlots(): FormArray {
    return this.signupForm.get('availabilitySlots') as FormArray;
  }

  getSlotGroup(index: number) {
    return this.availabilitySlots.at(index) as FormGroup;
  }

  addSlot() {
    const slot = this.fb.group({
      day: [''],
      startTime: [''],
      endTime: [''],
    });
    this.availabilitySlots.push(slot);
  }

  removeSlot(index: number) {
    this.availabilitySlots.removeAt(index);
  }

  passwordMatchValidator(form: FormGroup) {
    const p = form.get('password')?.value;
    const c = form.get('confirmPassword')?.value;
    return p === c ? null : { mismatch: true };
  }

  isDoctor(): boolean {
    return this.signupForm.value.designation === 'DOCTOR';
  }

  onSubmit() {
    if (this.signupForm.invalid) return;
    const payload = {
      ...this.signupForm.value,
    };
    this.http.post('[localhost](http://localhost:5000/api/auth/signup)', payload).subscribe({
      next: () => {
        alert('Registration submitted. Check your personal email for approval updates.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(err?.error?.message || 'Signup failed');
      },
    });
  }
}
