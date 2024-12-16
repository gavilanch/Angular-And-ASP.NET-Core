import { Component, Input, numberAttribute } from '@angular/core';
import { GenreCreationDTO, GenreDTO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";

@Component({
    selector: 'app-edit-genre',
    imports: [GenresFormComponent],
    templateUrl: './edit-genre.component.html',
    styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {
  @Input({transform: numberAttribute})
  id!: number;

  model: GenreDTO = {id: 1, name: 'Action'};

  saveChanges(genre: GenreCreationDTO){
    console.log('editing the genre', genre);
  }

}
