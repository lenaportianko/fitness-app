import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { reset, set } from '../../shared/store/user.action';
import { user } from '../constants/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public constructor(private store: Store<{ user: User }>) { }

  public getUser(): Observable<User> {
    return this.store.select('user');
  }

  public updateUser(userData: Partial<User>): void {
    this.store.dispatch(set({ data: { ...user, ...userData } }));
  }

  public resetUser(): void {
    this.store.dispatch(reset());
  }

}