import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputTextModule,
    PasswordModule,
    ProgressBarModule,
    TabViewModule,
    DividerModule,
    FormsModule,
    ButtonModule,
    CheckboxModule
  ]
})
export class AuthModule { }
