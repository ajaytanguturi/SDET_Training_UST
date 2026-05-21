import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile implements OnInit {
  user: any = null;
  profile: any = null;
  loading = true;

  constructor(private authService: Auth, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.authService.me().subscribe({
      next: (response: any) => {
        this.user = response.user || {};
        this.profile = response.profile || {};
        // keep local storage profile fresh
        localStorage.setItem('profile', JSON.stringify(this.profile));
        this.loading = false;
        this.cd.detectChanges();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
