import { Component, ChangeDetectorRef,  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})

export class MenuLateralComponent {
  isLogged: Boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private cdRef:ChangeDetectorRef) {
    this.isLogged = this.authService.isLoggedIn;
  }


  ngAfterContentChecked() {
    this.isLogged = this.authService.isLoggedIn
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
      this.isLogged = this.authService.isLoggedIn
  }
}
