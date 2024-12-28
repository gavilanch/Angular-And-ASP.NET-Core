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
import { isAdminGuard } from './shared/guards/is-admin.guard';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { IndexUsersComponent } from './security/index-users/index-users.component';

export const routes: Routes = [

    {path: '', component: LandingPageComponent},
    {path: 'genres', component: IndexGenresComponent, canActivate: [isAdminGuard]},
    {path: 'genres/create', component: CreateGenreComponent, canActivate: [isAdminGuard]},
    {path: 'genres/edit/:id', component: EditGenreComponent, canActivate: [isAdminGuard]},

    {path: 'actors', component: IndexActorsComponent, canActivate: [isAdminGuard]},
    {path: 'actors/create', component: CreateActorComponent, canActivate: [isAdminGuard]},
    {path: 'actors/edit/:id', component: EditActorComponent, canActivate: [isAdminGuard]},

    {path: 'theaters', component: IndexTheatersComponent, canActivate: [isAdminGuard]},
    {path: 'theaters/create', component: CreateTheaterComponent, canActivate: [isAdminGuard]},
    {path: 'theaters/edit/:id', component: EditTheaterComponent, canActivate: [isAdminGuard]},

    {path: 'movies/search', component: MoviesSearchComponent},
    {path: 'movies/create', component: CreateMovieComponent, canActivate: [isAdminGuard]},
    {path: 'movies/edit/:id', component: EditMovieComponent, canActivate: [isAdminGuard]},
    {path: 'movie/:id', component: MovieDetailsComponent},
    {path: 'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path: 'users', component: IndexUsersComponent},
    {path: '**', redirectTo: ''}

];
