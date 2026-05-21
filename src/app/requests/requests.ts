import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';
@Component({
  selector: 'app-requests',
  imports: [CommonModule],
  templateUrl: './requests.html',
  styleUrl: './requests.css',
})
export class Requests implements OnInit {
  requests: any[] = [];
  isLoading = true;
  constructor(private authService: Auth) { }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading = true;
    this.authService.getPendingRequests().subscribe({
      next: (res: any) => { this.requests = res.data; this.isLoading = false; },
      error: () => { this.isLoading = false; }
    });
  }
  approve(userId: string) {
    this.authService.approveEmployee({
  employeeId: userId,
  approve: true
});
  }
  reject(userId: string) {
    this.authService.rejectEmployee(userId).subscribe({
      next: () => this.load(),
     error: (err: any)  => alert(err.error?.message || 'Rejection Failed')
    });
  }
}
