import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AuthGaurd } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  {path: 'user', component: UserComponent, canActivate: [AuthGaurd]},
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {

}
