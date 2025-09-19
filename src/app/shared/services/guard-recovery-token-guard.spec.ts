import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardRecoveryTokenGuard } from './guard-recovery-token-guard';

describe('guardRecoveryTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardRecoveryTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
