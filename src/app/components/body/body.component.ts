import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { IMovie } from 'src/app/services/movies/types';
import SwiperCore from 'swiper';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  public now_playing!: IMovie;
  public testData: {
    title: string;
    rating: number;
    reviews: number;
    release: number;
    description: string;
  } = {
    title: 'Emancipation',
    rating: 8.2,
    reviews: 333,
    release: 2022,
    description:
      'Inspired by the gripping true story of a man who would do anything for his family—and for freedom. When Peter, an enslaved man, risks his life to escape and return to his family, he embarks on a perilous journey of love and endurance.',
  };
  constructor(private movies: MoviesService) {}

  ngOnInit(): void {
    this.movies.getMovies('now_playing').subscribe((movies: IMovie) => {
      this.now_playing = movies;
      console.log(this.now_playing);
    });
  }
}
