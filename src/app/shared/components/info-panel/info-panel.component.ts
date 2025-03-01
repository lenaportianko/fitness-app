import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsDialogComponent } from '../user-details-dialog/user-details-dialog.component';

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
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.userService.getUser().subscribe((userData: User) => {
      this.user = userData;
    });
  }

  public openUserDetailsDialog(): void {
    const dialogRef = this.dialog.open(UserDetailsDialogComponent, {
      data: this.user
    });

    dialogRef.afterClosed().subscribe((updatedUser: Partial<User>) => {
      if (updatedUser) {
        this.user = { ...this.user, ...updatedUser };
      }
    });
  }

}