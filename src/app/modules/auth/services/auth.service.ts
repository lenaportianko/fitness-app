import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getAuthValue(): string | null {
    return localStorage.getItem('isAuthenticated')
  }

  private setAuthValue(value: string): void {
    localStorage.setItem('isAuthenticated', value);
  }

  private removeAuthValue(): void {
    localStorage.removeItem('isAuthenticated');
  }

  public isAuthenticated(): boolean {
    const isAuthenticated: string | null = this.getAuthValue();

    if (isAuthenticated) {
      return JSON.parse(isAuthenticated);
    }

    return false;
  }

  public login(): void {
    this.setAuthValue(JSON.stringify(true));
  }

  public logout(): void {
    this.removeAuthValue();
  }
}
