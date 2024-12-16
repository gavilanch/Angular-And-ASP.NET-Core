import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { extractErrorsIdentity } from '../../shared/functions/extractErrors';
import { UserCredentialsDTO } from '../security.models';
import { SecurityService } from '../security.service';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { AuthenticationFormComponent } from "../authentication-form/authentication-form.component";

@Component({
    selector: 'app-login',
    imports: [DisplayErrorsComponent, AuthenticationFormComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  securityService = inject(SecurityService);
  router = inject(Router);
  errors: string[] = [];

  login(credentials: UserCredentialsDTO){
    this.securityService.login(credentials).subscribe({
      next: ()=>{
        this.router.navigate(['/']);
      },
      error: err => {
        this.errors = extractErrorsIdentity(err);
      }
    })
  }
}
