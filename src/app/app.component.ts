import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from './services/movies/movies.service';
import { IMovie } from './services/movies/types';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Scrollbar,
  Autoplay,
} from 'swiper';

SwiperCore.use([Navigation, A11y, Scrollbar, Autoplay]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
