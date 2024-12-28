import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { GenreCreationDTO, GenreDTO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";
import { GenresService } from '../genres.service';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { extractErrors } from '../../shared/functions/extractErrors';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { Router } from '@angular/router';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { EditEntityComponent } from "../../shared/components/edit-entity/edit-entity.component";

@Component({
    selector: 'app-edit-genre',
    imports: [EditEntityComponent],
    templateUrl: './edit-genre.component.html',
    styleUrl: './edit-genre.component.css',
    providers: [
        {
            provide: CRUD_SERVICE_TOKEN, useClass: GenresService
        }
    ]
})
export class EditGenreComponent {

  @Input({transform: numberAttribute})
  id!: number;
  genresForm = GenresFormComponent;

}
