import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorsMovieDTO } from 'src/app/actors/actors.model';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router) { }

  model: movieDTO;

  selectedGenres: multipleSelectorModel[];
  nonSelectedGenres: multipleSelectorModel[];
  selectedMovieTheaters: multipleSelectorModel[];
  nonSelectedMovieTheaters: multipleSelectorModel[];
  selectedActors: actorsMovieDTO[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.putGet(params.id).subscribe(putGetDTO => {
        this.model = putGetDTO.movie;

        this.selectedGenres = putGetDTO.selectedGenres.map(genre => {
          return <multipleSelectorModel>{key: genre.id, value: genre.name}
        });

        this.nonSelectedGenres = putGetDTO.nonSelectedGenres.map(genre => {
          return <multipleSelectorModel>{key: genre.id, value: genre.name}
        });
  
        this.selectedMovieTheaters = putGetDTO.selectedMovieTheaters.map(movieTheater => {
          return <multipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
        });

        this.nonSelectedMovieTheaters = putGetDTO.nonSelectedMovieTheaters.map(movieTheater => {
          return <multipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
        });

        this.selectedActors = putGetDTO.actors;

      });
    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){
    this.moviesService.edit(this.model.id, movieCreationDTO).subscribe(() => {
      this.router.navigate(['/movie/' + this.model.id]);
    });
  }

}
