import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

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

  public login(userData: Partial<User>): void {
    this.userService.updateUser(userData);
    this.setAuthValue(JSON.stringify(true));
  }

  public register(user: User): void {
    this.userService.updateUser(user);
    this.setAuthValue(JSON.stringify(true));
  }

  public logout(): void {
    this.removeAuthValue();
    this.userService.resetUser();
  }
}
