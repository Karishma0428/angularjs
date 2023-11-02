import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isAthenticated(): boolean {
    if (sessionStorage.getItem('tokken') !== null) {
      return true;
    }
    return false;
  }
  userAccess() {
    if (!this.isAthenticated()) {
      this.router.navigate(['/login']);
    }
  }
}
