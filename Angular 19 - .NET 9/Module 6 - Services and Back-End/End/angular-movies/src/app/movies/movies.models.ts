import { ActorAutoCompleteDTO } from "../actors/actors.models";
import { GenreDTO } from "../genres/genres.models";
import { TheaterDTO } from "../theaters/theaters.models";

export interface MovieDTO {
    id: number;
    title: string;
    releaseDate: Date;
    trailer: string;
    poster?: string;
    genres?: GenreDTO[];
    theaters?: TheaterDTO[];
    actors?: ActorAutoCompleteDTO[];
}

export interface MovieCreationDTO {
    title: string;
    releaseDate: Date;
    trailer: string;
    poster?: File;
    genresIds?: number[];
    theatersIds?: number[];
    actors?: ActorAutoCompleteDTO[];
}

export interface MoviesPostGetDTO {
    genres: GenreDTO[];
    theaters: TheaterDTO[];
}

export interface MoviesPutGetDTO {
    movie: MovieDTO;
    selectedGenres: GenreDTO[];
    nonSelectedGenres: GenreDTO[];
    selectedTheaters: TheaterDTO[];
    nonSelectedTheaters: TheaterDTO[];
    actors: ActorAutoCompleteDTO[];
}

export interface LandingDTO {
    upcomingReleases: MovieDTO[];
    inTheaters: MovieDTO[];
}