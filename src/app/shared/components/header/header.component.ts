import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { menu } from '../../../core/constants/menu';
import { Menu } from '../../../core/models/menu.model';

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

  @Input() activeTab: string = 'activity';
  @Output() tabEvent = new EventEmitter<string>();

  public menuItems: Menu[] = menu;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public logOut(): void {
    this.authService.logout();
    this.router.navigate(['/auth/signin']);
  }

  public toggleTab(tab: string): void {
    this.tabEvent.emit(tab);
  }

}
