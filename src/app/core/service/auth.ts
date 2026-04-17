import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/auth/login';

  
  isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));

  login(credentials: any) {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap(res => {
        if (res.token) {
          localStorage.setItem('token', res.token); 
          this.isLoggedIn.set(true);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.set(false);
  }
}