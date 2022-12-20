import { Component, Input, OnInit } from '@angular/core';
import { IResults } from 'src/app/services/movies/types';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor() {}
  @Input()
  public movie!: IResults;

  ngOnInit(): void {
    console.log(this.movie);
  }
}
