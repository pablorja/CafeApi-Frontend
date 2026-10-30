import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly TOKEN_KEY = 'token';

  private readonly USER_KEY = 'user';

  setToken(token: string): void {
    localStorage.setItem(
      this.TOKEN_KEY,
      token
    );
  }

  getToken(): string | null {
    return localStorage.getItem(
      this.TOKEN_KEY
    );
  }

  removeToken(): void {
    localStorage.removeItem(
      this.TOKEN_KEY
    );
  }

  setUser(user: unknown): void {
    localStorage.setItem(
      this.USER_KEY,
      JSON.stringify(user)
    );
  }

  getUser<T>(): T | null {
    const user =
      localStorage.getItem(
        this.USER_KEY
      );

    if (!user) {
      return null;
    }

    return JSON.parse(user) as T;
  }

  clear(): void {
    localStorage.clear();
  }
}
