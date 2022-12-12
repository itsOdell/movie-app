import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { IPopularMovie } from 'src/app/services/movies/types';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input()
  public genre!: IPopularMovie[];
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => console.log(this.genre), 1000);
  }
}
