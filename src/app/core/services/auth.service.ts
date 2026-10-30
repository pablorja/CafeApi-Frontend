import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { API_CONFIG } from '../config/api.config';

import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http =
    inject(HttpClient);

  private readonly storageService =
    inject(StorageService);

  login(
    request: LoginRequest
  ): Observable<LoginResponse> {

    return this.http
      .post<LoginResponse>(
        `${API_CONFIG.baseUrl}/auth/login`,
        request
      )
      .pipe(
        tap(response => {

          this.storageService.setToken(
            response.token
          );

          this.storageService.setUser({
            email: response.email,
            role: response.role
          });

        })
      );
  }

  logout(): void {
    this.storageService.clear();
  }

  isAuthenticated(): boolean {
    return !!this.storageService.getToken();
  }
}
