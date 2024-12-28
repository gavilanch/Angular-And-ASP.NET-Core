import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from '../../security/security.service';

export const isAdminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const securityService = inject(SecurityService);

  if (securityService.getRole() === 'admin'){
    return true;
  }

  router.navigate(['/login']);
  return true;
};
