import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignupPageModule',
  },
  {
    path: 'event-create',
    loadChildren:
      './pages/event-create/event-create.module#EventCreatePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'event-detail/:id',
    loadChildren:
      './pages/event-detail/event-detail.module#EventDetailPageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'event-list',
    loadChildren: './pages/event-list/event-list.module#EventListPageModule',
    canActivate: [AuthGuard],
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'reset-password',
    loadChildren:
      './pages/reset-password/reset-password.module#ResetPasswordPageModule',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
