import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    public canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/auth/signin']);
            return false;
        }
    }
}