import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  getMovies(type: string): Observable<IMovie> {
    let response = this.http.get<IMovie>(
      `${this.baseUrl}/movie/${type}?api_key=${environment.TMDB_APIKEY}`
    );
    return response;
  }
}
