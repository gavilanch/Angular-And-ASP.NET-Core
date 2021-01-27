import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-authorize-view',
  templateUrl: './authorize-view.component.html',
  styleUrls: ['./authorize-view.component.css']
})
export class AuthorizeViewComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
  }

  @Input()
  role: string;

  public isAuthorized(){
    if (this.role){
      return this.securityService.getRole() === this.role;
    } else{
      return this.securityService.isAuthenticated();
    }
  }

}
