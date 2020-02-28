import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: UserModel;
  errors: any[] = [];
  obsLogin: Observable<{}>;

  constructor(private http: HttpClient, private router: Router) { }

  // isAuthenticated(): boolean {
  //   const userData = localStorage.getItem('userInfo');
  //   console.log(userData);
  //   if (userData && JSON.parse(userData)) {
  //     return true;
  //   }
  //   return false;
  // }

  signIn(formData: { username: string, password: string }): Observable<any> {
      return this.http.post<any>('http://localhost:3000/signin', formData);
  }

  signUp(formData: {
    imageURL: string,
    name: string,
    firstname: string,
    username: string,
    email: string,
    password: string,
    confirmPassword: string
    }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signup', formData);
  }

}