import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { User } from '../../../core/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.scss',
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class InfoPanelComponent {

  public user$: Observable<User>;

  public constructor(
    store: Store<{ user: User }>
  ) {
    this.user$ = store.select('user');
  }
}