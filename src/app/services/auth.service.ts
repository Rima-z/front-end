import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { tap } from 'rxjs/operators';
import { User } from '../models/user.module';


interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  setToken(token: string) {
    if (token !== null) {
      this.token = token;
    }
  }
  private token: string | null = localStorage.getItem('token');

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private router : Router, private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // private apiUrl = 'http://localhost:8089/Stage/Pharmacien/authenticate';


  private readonly API_URL = 'http://localhost:8089/Stage/Pharmacien/authenticate';
  
  private loggedIn = new BehaviorSubject<boolean>(false);

 
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}`, { email, password }).pipe(
      tap(res => {
        if (res.success) {
          localStorage.setItem('token', res.token);
          this.token = res.token;
          this.loggedIn.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.token = null;
    this.loggedIn.next(false);
  }

  getToken(): string {
    return this.token || localStorage.getItem('token') || '';
  }

  isAuthenticated(): boolean {
    // Logic to check if the user is authenticated goes here
    // For example, you could check if the user has a valid JWT token
    const token = this.getToken();
    return !!token;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
  getCurrentUser(): User {
    return this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() != null;
  }


  
}
