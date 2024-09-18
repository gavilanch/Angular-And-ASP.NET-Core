import { Component, inject, Input } from '@angular/core';
import { PaginationDTO } from '../../models/PaginationDTO';
import { CRUD_SERVICE_TOKEN } from '../../providers/providers';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { GenericListComponent } from '../generic-list/generic-list.component';
import { ICRUDService } from '../../interfaces/ICRUDService';

@Component({
  selector: 'app-index-entities',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule, MatTableModule, GenericListComponent,
    MatPaginatorModule, SweetAlert2Module],
  templateUrl: './index-entities.component.html',
  styleUrl: './index-entities.component.css'
})
export class IndexEntitiesComponent<TDTO, TCreationDTO> {
  CRUDService = inject(CRUD_SERVICE_TOKEN) as ICRUDService<TDTO, TCreationDTO>;
  entities!: TDTO[];
  pagination: PaginationDTO = {page: 1, recordsPerPage: 5};
  totalRecordsCount!: number;

  @Input({required: true})
  title!: string;

  @Input({required: true})
  createRoute!: string;

  @Input({required: true})
  editRoute!: string;

  @Input()
  columnsToDisplay = ['id', 'name', 'actions'];

  constructor(){
    this.loadRecords();
  }

  loadRecords(){
    this.CRUDService.getPaginated(this.pagination).subscribe((response: HttpResponse<TDTO[]>) => {
      this.entities = response.body as TDTO[];
      const header = response.headers.get('total-records-count') as string;
      this.totalRecordsCount = parseInt(header, 10);
    })
  }

  updatePagination(data: PageEvent){
    this.pagination = {page: data.pageIndex + 1, recordsPerPage: data.pageSize};
    this.loadRecords(); 
  }

  delete(id: number){
    this.CRUDService.delete(id).subscribe(() => {
      this.loadRecords(); 
    });
  }

  firstLetterToUppercase(value: string){
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
