import { Component } from '@angular/core';
import { MovieCreationDTO } from '../movies.models';
import { MoviesFormComponent } from "../movies-form/movies-form.component";
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';
import { ActorAutoCompleteDTO } from '../../actors/actors.models';

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [MoviesFormComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent {

  nonSelectedGenres: MultipleSelectorDTO[] = [
    {key: 1, description: 'Drama'},
    {key: 2, description: 'Action'},
    {key: 3, description: 'Comedy'},
  ]

  selectedGenres: MultipleSelectorDTO[] = [];

  nonSelectedTheaters: MultipleSelectorDTO[] = [
    {key: 1, description: 'Acropolis'},
    {key: 2, description: 'Agora Mall'},
  ]

  selectedTheaters: MultipleSelectorDTO[] = [];

  selectedActors: ActorAutoCompleteDTO[] = [];

  saveChanges(movie: MovieCreationDTO){
    console.log('Creating the movie', movie);
  }

}
