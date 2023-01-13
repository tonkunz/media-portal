import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
  },
];
