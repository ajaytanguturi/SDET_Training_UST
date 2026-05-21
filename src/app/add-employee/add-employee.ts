import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
})
export class AddEmployee {
  form: FormGroup;
  isLoading = false;
  submitted = false;
  errorMsg = '';

  roles = ['ADMIN', 'DOCTOR', 'RECEPTIONIST', 'CASHIER', 'NURSE', 'LAB_TECH', 'PHARMACIST'];
  departments = ['OPD', 'IPD', 'LAB', 'Pharmacy', 'Admin'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: Auth
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      personalEmail: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      role: ['', Validators.required],
      department: ['', Validators.required],
      designation: [''],
      joiningDate: ['', Validators.required],
      qualification: [''],
      specialization: [''],
      medicalRegistrationNumber: [''],
      consultationFee: [0],
      availabilitySlots: this.fb.array([])
    });
  }

  get availabilitySlots(): FormArray {
    return this.form.get('availabilitySlots') as FormArray;
  }

  getSlotGroup(i: number): FormGroup {
    return this.availabilitySlots.at(i) as FormGroup;
  }

  addSlot() {
    this.availabilitySlots.push(
      this.fb.group({ day: [''], startTime: [''], endTime: [''] })
    );
  }

  removeSlot(i: number) { this.availabilitySlots.removeAt(i); }

  isDoctor(): boolean { return this.form.value.role === 'DOCTOR'; }

  onSubmit() {
    if (this.form.invalid) return;

    this.isLoading = true;
    this.errorMsg = '';

    this.authService.createEmployee(this.form.value).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.submitted = true;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = err.error?.message || 'Failed to create employee. Please try again.';
      }
    });
  }

  goBack() { this.router.navigate(['/dashboard']); }
}