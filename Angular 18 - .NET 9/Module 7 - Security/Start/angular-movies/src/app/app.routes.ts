import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexTheatersComponent } from './theaters/index-theaters/index-theaters.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditTheaterComponent } from './theaters/edit-theater/edit-theater.component';
import { MoviesSearchComponent } from './movies/movies-search/movies-search.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

export const routes: Routes = [

    {path: '', component: LandingPageComponent},
    {path: 'genres', component: IndexGenresComponent},
    {path: 'genres/create', component: CreateGenreComponent},
    {path: 'genres/edit/:id', component: EditGenreComponent},

    {path: 'actors', component: IndexActorsComponent},
    {path: 'actors/create', component: CreateActorComponent},
    {path: 'actors/edit/:id', component: EditActorComponent},

    {path: 'theaters', component: IndexTheatersComponent},
    {path: 'theaters/create', component: CreateTheaterComponent},
    {path: 'theaters/edit/:id', component: EditTheaterComponent},

    {path: 'movies/search', component: MoviesSearchComponent},
    {path: 'movies/create', component: CreateMovieComponent},
    {path: 'movies/edit/:id', component: EditMovieComponent},
    {path: 'movie/:id', component: MovieDetailsComponent},
    {path: '**', redirectTo: ''}

];
