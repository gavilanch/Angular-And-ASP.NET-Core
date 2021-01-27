import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + "/ratings";

  public rate(movieId: number, rating: number){
    return this.http.post(this.apiURL, {movieId, rating});
  }
}
