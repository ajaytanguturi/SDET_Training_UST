import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = '[localhost](http://localhost:5000/api)';

@Injectable({ providedIn: 'root' })
export class Auth {
  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${API}/auth/login`, data);
  }

  me() {
    return this.http.get(`${API}/auth/me`);
  }

  signup(payload: any) {
    return this.http.post(`${API}/auth/signup`, payload);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }
  rejectEmployee(employeeId: string) {

    return this.http.post(
      `${API}/admin/approve-employee`,
      {
        employeeId,
        approve: false
      }
    );
  }
  resetPassword(newPassword: string) {
    return this.http.post(`${API}/admin/reset-password`, { newPassword });
  }

  approveEmployee(body: { employeeId: string; approve: boolean }) {
    return this.http.post(`${API}/admin/approve-employee`, body);
  }

  createEmployee(payload: any) {
    return this.http.post(`${API}/admin/create-employee`, payload);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    const profile = localStorage.getItem('profile');

    if (!profile) return null;

    try {
      const parsed = JSON.parse(profile);
      return parsed.designation || null;
    } catch {
      return null;
    }
  }
  getPendingRequests() {
    return this.http.get(`${API}/admin/pending-requests`);
  }
}
