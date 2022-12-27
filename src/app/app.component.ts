import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from './services/movies/movies.service';
import { IMovie } from './services/movies/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private movies: MoviesService) {}
  title = 'movie-app';
  public popularMovies!: IMovie;
  ngOnInit(): void {
    this.movies
      .getMovies('popular')
      .subscribe((data) => (this.popularMovies = data));
  }
}
