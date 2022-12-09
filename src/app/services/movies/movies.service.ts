import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPopularMovie } from './types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) {}

  popularMovies(): Observable<IPopularMovie[]> {
    let response = this.http.get<IPopularMovie[]>(this.baseUrl);
    return response;
  }
}
