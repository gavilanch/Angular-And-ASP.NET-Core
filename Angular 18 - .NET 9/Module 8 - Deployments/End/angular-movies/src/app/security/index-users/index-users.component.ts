import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { PaginationDTO } from '../../shared/models/PaginationDTO';
import { SecurityService } from '../security.service';
import { HttpResponse } from '@angular/common/http';
import { UserDTO } from '../security.models';
import Swal from 'sweetalert2';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";

@Component({
  selector: 'app-index-users',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatTableModule, MatPaginator, SweetAlert2Module, GenericListComponent],
  templateUrl: './index-users.component.html',
  styleUrl: './index-users.component.css'
})
export class IndexUsersComponent {
  columnsToDisplay = ['email', 'actions'];
  pagination: PaginationDTO = {page: 1, recordsPerPage: 10};
  totalRecordsCount!: number;
  securityService = inject(SecurityService);
  users!: UserDTO[];

  constructor(){
    this.loadRecords();
  }

  loadRecords(){
    this.securityService.getUsersPaginated(this.pagination).subscribe((response: HttpResponse<UserDTO[]>) => {
      this.users = response.body as UserDTO[];
      const header = response.headers.get('total-records-count') as string;
      this.totalRecordsCount = parseInt(header, 10);
    });
  }

  updatePagination(data: PageEvent){
    this.pagination = {page: data.pageIndex + 1, recordsPerPage: data.pageSize};
    this.loadRecords();
  }

  makeAdmin(email: string){
    this.securityService.makeAdmin(email).subscribe(() => {
      Swal.fire("Successful", `The user ${email} is now an admin`, 'success');
    })
  }

  removeAdmin(email: string){
    this.securityService.removeAdmin(email).subscribe(() => {
      Swal.fire("Successful", `The user ${email} is not an admin anymore`, 'success');
    })
  }

}
