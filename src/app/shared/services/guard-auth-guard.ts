import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth-service';
import { catchError, map, of } from 'rxjs';

export const guardAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.auth().pipe(
    map(() => true),
    catchError(() => of(router.parseUrl('/auth/login')))
  );
};

/*
  return authService.auth().pipe(
    map(response => {
      gameState.nameUser.set(response.username);
      gameState.isLogin.set(true);
      return true;
    }),
    catchError(() => of(router.parseUrl('/auth/login')))
  );
  */
