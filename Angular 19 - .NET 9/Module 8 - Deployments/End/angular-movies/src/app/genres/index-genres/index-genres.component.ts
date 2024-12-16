import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { GenresService } from '../genres.service';
import { GenreDTO } from '../genres.models';
import { environment } from '../../../environments/environment';
import { MatTable, MatTableModule } from '@angular/material/table';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PaginationDTO } from '../../shared/models/PaginationDTO';
import { HttpResponse } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { IndexEntitiesComponent } from "../../shared/components/index-entities/index-entities.component";

@Component({
    selector: 'app-index-genres',
    imports: [IndexEntitiesComponent],
    templateUrl: './index-genres.component.html',
    styleUrl: './index-genres.component.css',
    providers: [
        { provide: CRUD_SERVICE_TOKEN, useClass: GenresService }
    ]
})
export class IndexGenresComponent {
 
}
