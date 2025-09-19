import { CanActivateFn } from '@angular/router';

export const guardRecoveryTokenGuard: CanActivateFn = (route, state) => {
  return true;
};
