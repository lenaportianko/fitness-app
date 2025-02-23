import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.scss',
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class InfoPanelComponent implements OnInit {

  public user: User = {
    name: '',
    email: '',
    country: ''
  };

  public constructor(
    private userService: UserService
  ) { }

  public ngOnInit(): void {
    this.userService.getUser().subscribe((userData: User) => {
      this.user = userData;
    });
  }

}