declare var M: any;

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import {
  MovieFullInformations,
  MovieShortInformations,
} from '../../model/modelbundle';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  detail: MovieFullInformations;

  @Input()
  movie: MovieShortInformations;

  constructor(private movieService: MovieService) {}

  triggerModal(): void {
    var elem = document.querySelector('#modal' + this.movie.imdbID);
    var instance = M.Modal.init(elem, {});
    this.movieService
      .getMovie(this.movie.imdbID)
      .subscribe((res: MovieFullInformations) => {
        this.detail = res;
      });
    instance.open();
  }

  ngOnInit() {}
}
