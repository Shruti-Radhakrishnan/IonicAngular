import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThanksComponent } from '../thanks/thanks.component';
import { RegistrationPage } from './registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage,
  },
  {
    path:'thanks',
    component: ThanksComponent,
  },
  {
    path: 'tabs/tabs1',
    
    loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
