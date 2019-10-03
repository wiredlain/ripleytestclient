import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeCLP from '@angular/common/locales/es-CL';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './core/user.service';
import { AuthService } from './core/auth.service';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanActivateViaAuthGuard } from './core/can-activate-via-auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './core/loader-interceptor';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'products', component: ProductComponent , canActivate: [CanActivateViaAuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent , canActivate: [CanActivateViaAuthGuard]},
];
registerLocaleData(localeCLP, 'es-CL');

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuLateralComponent,
    ProductComponent,
    LoginComponent,
    LogoutComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes),
    DeviceDetectorModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthService, 
    UserService,
    CanActivateViaAuthGuard,
    LoaderService,
    //{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
