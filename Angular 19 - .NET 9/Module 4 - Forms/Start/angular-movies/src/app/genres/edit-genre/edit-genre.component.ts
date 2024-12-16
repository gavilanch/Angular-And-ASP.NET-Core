import { Component, Input, numberAttribute } from '@angular/core';

@Component({
    selector: 'app-edit-genre',
    imports: [],
    templateUrl: './edit-genre.component.html',
    styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {
  @Input({transform: numberAttribute})
  id!: number;

}
