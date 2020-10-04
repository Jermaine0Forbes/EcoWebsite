import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, RouteComps } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginService} from "./login/login.service";
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthguardService } from './service/authguard.service';
import { AuthService } from './service/auth.service';
import { RoleGuardService } from './service/role-guard.service';

@NgModule({
  declarations: [
  RouteComps,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    JwtHelperService,
    AuthguardService,
    AuthService,
    RoleGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
