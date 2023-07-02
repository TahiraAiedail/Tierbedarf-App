import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import {inject } from '@angular/core';
import { Router } from 'express';



export const authGuard: CanActivateFn = (route, state) => {
  console.log('Auth Guard can Activate called');
  const authService = inject(AuthService);
  const router = inject(Router);

  //User ist angemeldet
  if(authService.isLoggedIn) {
    return true;
  }

  //User ist nicht angemeldet
  return router.parseUrl('/login');
};
