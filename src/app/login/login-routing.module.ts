import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'registration',
    loadChildren: () => import('../registration/registration.module').then( m => m.RegistrationPageModule)
  },

  {
    path: 'password-reset',
    loadChildren: () => import('../password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
