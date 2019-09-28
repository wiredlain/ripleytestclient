import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './core/auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!this.authService.isLoggedIn) {
            console.log('No estás logueado');
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}