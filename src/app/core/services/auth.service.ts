import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset, set } from '../../shared/store/user.action';
import { user } from '../constants/user';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store) { }

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
    this.store.dispatch(set({ data: { ...user, ...userData } }));
    this.setAuthValue(JSON.stringify(true));
  }

  public register(user: User): void {
    this.store.dispatch(set({ data: user}));
    this.setAuthValue(JSON.stringify(true));
  }

  public logout(): void {
    this.removeAuthValue();
    this.store.dispatch(reset());
  }
}
