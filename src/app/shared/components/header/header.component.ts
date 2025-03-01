import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule 
  ]
})
export class HeaderComponent {

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public logOut(): void {
    this.authService.logout();
    this.router.navigate(['/auth/signin']);
  }

}
