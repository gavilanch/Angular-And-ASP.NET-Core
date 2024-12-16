import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GenreDTO } from '../../genres/genres.models';
import { MoviesListComponent } from "../movies-list/movies-list.component";
import { MoviesSearchDTO } from './movies-search.models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-movies-search',
    imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule,
        MatSelectModule, MatCheckboxModule, MoviesListComponent],
    templateUrl: './movies-search.component.html',
    styleUrl: './movies-search.component.css'
})
export class MoviesSearchComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  location = inject(Location);

  ngOnInit(): void {
    this.readValuesFromURL();
    this.filterMovies(this.form.value as MoviesSearchDTO);
    this.form.valueChanges.subscribe(values => {
      this.movies = this.moviesOriginal;
      this.filterMovies(values as MoviesSearchDTO);
      this.writeParametersInTheURL();
    });
  }

  readValuesFromURL(){
    this.activatedRoute.queryParams.subscribe((params: any) => {
      let obj: any = {};

      if (params.title){
        obj.title = params.title;
      }

      if (params.genreId){
        obj.genreId = Number(params.genreId);
      }

      if (params.upcomingReleases){
        obj.upcomingReleases = params.upcomingReleases;
      }

      if (params.inTheaters){
        obj.inTheaters = params.inTheaters;
      }

      this.form.patchValue(obj);

    })
  }

  writeParametersInTheURL(){
    let queryStrings = [];

    const valuesOfForm = this.form.value as MoviesSearchDTO;

    if (valuesOfForm.title){
      queryStrings.push(`title=${encodeURIComponent(valuesOfForm.title)}`);
    }

    if (valuesOfForm.genreId !== 0){
      queryStrings.push(`genreId=${valuesOfForm.genreId}`)
    }

    if (valuesOfForm.upcomingReleases){
      queryStrings.push(`upcomingReleases=${valuesOfForm.upcomingReleases}`)
    }

    if (valuesOfForm.inTheaters){
      queryStrings.push(`inTheaters=${valuesOfForm.inTheaters}`)
    }

    this.location.replaceState('movies/search', queryStrings.join('&'));
  }

  filterMovies(values: MoviesSearchDTO){
    if (values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }

    if (values.genreId !== 0){
      this.movies = this.movies.filter(movie => movie.genres.indexOf(values.genreId) !== -1);
    }

    if (values.upcomingReleases){
      this.movies = this.movies.filter(movie => movie.upcomingRelease);
    }

    if (values.inTheaters){
      this.movies = this.movies.filter(movie => movie.inTheaters);
    }

  }

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  })

  genres: GenreDTO[] = [
    { id: 1, name: 'Comedy' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Drama' }

  ]

  moviesOriginal = [{
    title: 'Inside Out 2',
    releaseDate: new Date(),
    price: 1400.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
    genres: [1, 2, 3],
    upcomingRelease: true,
    inTheaters: false
  },
  {
    title: 'Moana 2',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
    genres: [3],
    upcomingRelease: false,
    inTheaters: true
  },
  {
    title: 'Bad Boys: Ride or Die',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
    genres: [1, 3],
    upcomingRelease: true,
    inTheaters: false
  },
  {
    title: 'Deadpool & Wolverine',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
    genres: [3],
    upcomingRelease: false,
    inTheaters: false
  
  },
  {
    title: 'Oppenheimer',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
    genres: [2],
    upcomingRelease: false,
    inTheaters: true
  },
  {
    title: 'The Flash',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
    genres: [1, 2, 3],
    upcomingRelease: true,
    inTheaters: false
  }];

  movies = this.moviesOriginal;

  clear() {
    this.form.patchValue({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    })
  }

}
