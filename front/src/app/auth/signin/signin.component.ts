import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @ViewChild('f', { static: false }) signInForm: NgForm;
  response: Observable<any>;
  errors = [];
  isLoading: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getisLoading().subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  onLogin() {
    if (this.signInForm.invalid) {
      return;
    }
    this.authService.login(this.signInForm.value);
  }
}