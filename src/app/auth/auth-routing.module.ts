import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'forget-password', component: ForgetPasswordComponent }
    ]
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
