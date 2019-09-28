import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateViaAuthGuard } from './can-activate-via-auth-guard.guard';

describe('CanActivateViaAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateViaAuthGuard]
    });
  });

  it('should ...', inject([CanActivateViaAuthGuard], (guard: CanActivateViaAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
