import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component'),
  },
  {
    path: 'party-list',
    loadComponent: () => import('./components/party-list/party-list.component'),
    canActivate: [authGuard],
  },
  {
    path: 'new-party-form',
    loadComponent: () => import('./components/new-form-party/new-form-party.component'),
    canActivate: [authGuard],
  },
  {
    path: 'party-list/:id',
    loadComponent: () =>
      import('./components/edit-party-form/edit-party-form.component'),
    canActivate: [authGuard],
  },
];
