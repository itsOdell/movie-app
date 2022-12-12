import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { IPopularMovie } from 'src/app/services/movies/types';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  public popularMovies: IPopularMovie[] = [];

  constructor(private movies: MoviesService) {}

  ngOnInit(): void {
    this.movies
      .popularMovies()
      .subscribe((movies: IPopularMovie[]) => (this.popularMovies = movies));
  }
}
