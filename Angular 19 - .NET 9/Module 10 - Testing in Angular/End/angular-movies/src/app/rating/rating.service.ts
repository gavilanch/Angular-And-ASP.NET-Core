import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private http = inject(HttpClient);
  private baseURL = environment.apiURL + '/ratings';

  rate(movieId: number, rate: number){
    return this.http.post(this.baseURL, {movieId, rate});
  }

  constructor() { }
}
