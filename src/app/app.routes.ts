import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : 'userprofile/new',
    loadComponent:() => import('app/user-profile/user-profile-update/user-profile-update.component').then((m) => m.UserProfileUpdateComponent),
  }
];
