import { Component, inject } from '@angular/core';
import { MoviesListComponent } from "../movies/movies-list/movies-list.component";
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  upcomingReleasesMovies: any;
  inTheatersMovies: any;

  moviesService = inject(MoviesService);

  constructor(){
    this.loadMovies();
   }

   loadMovies(){
    this.moviesService.getLanding().subscribe(response => {
      this.upcomingReleasesMovies = response.upcomingReleases;
      this.inTheatersMovies = response.inTheaters;
    });
   }

   handleDelete(){
    this.loadMovies();
   }
}
