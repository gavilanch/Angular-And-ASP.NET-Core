import { Component, inject, Input } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
    selector: 'app-authorized',
    imports: [],
    templateUrl: './authorized.component.html',
    styleUrl: './authorized.component.css'
})
export class AuthorizedComponent {
  securityService = inject(SecurityService);

  @Input()
  role?: string;

  isAuthorized(): boolean{
    if (this.role){
      return this.securityService.getRole() === this.role;
    } else {
      return this.securityService.isLoggedIn();
    }
  }
}
