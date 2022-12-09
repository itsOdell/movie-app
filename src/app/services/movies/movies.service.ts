import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url: string = "url"
  constructor(private http: HttpClient) { }

  get discoverMovies() {
    let response = this.http.get(this.url);
    return response;
  }
}