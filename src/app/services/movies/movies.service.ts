import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPopularMovie } from './types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  popularMovies(): Observable<IPopularMovie> {
    let response = this.http.get<IPopularMovie>(
      `${this.baseUrl}/movie/popular?api_key=${environment.TMDB_APIKEY}`
    );
    return response;
  }
}
