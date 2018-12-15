import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {P404Component} from './p404.component';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './users/user-details.component';
import {UserCanActivateGuard} from './users/UserCanActivateGuard';
const MY_ROUTES: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId', component: UserDetailComponent, canActivate: [UserCanActivateGuard]},
  // {path:'error', component:ErrorComponent}
  {path: '404', component: P404Component},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(MY_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
