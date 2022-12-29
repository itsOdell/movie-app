import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { IMovie } from 'src/app/services/movies/types';
import SwiperCore, { Swiper } from 'swiper';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  public now_playing!: IMovie;
  constructor(private movies: MoviesService) {}

  activeIndex = 0;
  activeImage: string | undefined | null = '';

  onSwiper(swiper: Swiper) {
    this.activeIndex = swiper.activeIndex;
    this.activeImage = this.now_playing.results[this.activeIndex].backdrop_path;
  }

  onSlideChange([swiper]: any) {
    this.activeIndex = swiper.activeIndex;
    this.activeImage = this.now_playing.results[this.activeIndex].backdrop_path;
  }

  ngOnInit(): void {
    this.movies.getMovies('now_playing').subscribe((movies: IMovie) => {
      this.now_playing = movies;
      console.log(this.now_playing);
    });
  }
}
