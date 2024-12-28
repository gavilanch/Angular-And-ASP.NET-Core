import { Component, inject } from '@angular/core';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { UserCredentialsDTO } from '../security.models';
import { extractErrorsIdentity } from '../../shared/functions/extractErrors';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { AuthenticationFormComponent } from "../authentication-form/authentication-form.component";

@Component({
    selector: 'app-register',
    imports: [DisplayErrorsComponent, AuthenticationFormComponent],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {

  securityService = inject(SecurityService);
  router = inject(Router);
  errors: string[] = [];

  register(credentials: UserCredentialsDTO){
    this.securityService.register(credentials).subscribe({
      next: ()=>{
        this.router.navigate(['/']);
      },
      error: err => {
        this.errors = extractErrorsIdentity(err);
      }
    })
  }

}
