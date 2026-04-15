import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent),
  },
  {
    path: 'transfer',
    loadComponent: () =>
      import('./pages/transfer/transfer-selection/transfer-selection').then(
        m => m.TransferSelectionComponent
      ),
  },
  {
    path: 'transfer/form',
    loadComponent: () =>
      import('./pages/transfer/transfer-form/transfer-form').then(m => m.TransferFormComponent),
  },
  {
    path: 'transfer/summary',
    loadComponent: () =>
      import('./pages/transfer/transfer-summary/transfer-summary').then(
        m => m.TransferSummaryComponent
      ),
  },
  {
    path: 'transfer/success',
    loadComponent: () =>
      import('./pages/transfer/transfer-success/transfer-success').then(
        m => m.TransferSuccessComponent
      ),
  },
  { path: '**', redirectTo: 'login' },
];
