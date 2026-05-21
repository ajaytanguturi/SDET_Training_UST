import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DASHBOARD_MENUS } from '../core/dashboard.config';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  userInitial = 'U';
  userName = '';
  role = '';
  menus: { label: string; route: string }[] = [];

  ngOnInit(): void {
    const profileStr = localStorage.getItem('profile');
    if (profileStr) {
      const user = JSON.parse(profileStr);
      this.userInitial = (user.name || 'U').charAt(0).toUpperCase();
      this.userName = user.name || '';
      this.role = user.designation || '';
      this.menus = DASHBOARD_MENUS[this.role] || [];
    }
  }

  constructor(private router: Router) { }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
