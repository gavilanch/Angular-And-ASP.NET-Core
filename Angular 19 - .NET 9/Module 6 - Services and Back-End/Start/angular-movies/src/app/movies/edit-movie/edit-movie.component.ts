import { ActorAutoCompleteDTO } from './../../actors/actors.models';
import { Component, Input, numberAttribute } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import { MoviesFormComponent } from "../movies-form/movies-form.component";
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';

@Component({
    selector: 'app-edit-movie',
    imports: [MoviesFormComponent],
    templateUrl: './edit-movie.component.html',
    styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {

  @Input({ transform: numberAttribute })
  id!: number;

  model: MovieDTO = {
    id: 1, title: 'Spider-Man: Far From Home',
    releaseDate: new Date('2019-07-22'), trailer: 'abcd',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
  }


  nonSelectedGenres: MultipleSelectorDTO[] = [
    { key: 1, description: 'Drama' },
    { key: 3, description: 'Comedy' },
  ]

  selectedGenres: MultipleSelectorDTO[] = [

    { key: 2, description: 'Action' },

  ];

  nonSelectedTheaters: MultipleSelectorDTO[] = [
    { key: 1, description: 'Acropolis' }
  ]

  selectedTheaters: MultipleSelectorDTO[] = [
    { key: 2, description: 'Agora Mall' }
  ];

  selectedActors: ActorAutoCompleteDTO[] = [
    {id: 2, name: 'Tom Hanks', character: 'Forrest Gump', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/220px-Tom_Hanks_TIFF_2019.jpg' },
    
  ]
  
  saveChanges(movie: MovieCreationDTO) {
    console.log('editing the movie', movie);
  }

}
