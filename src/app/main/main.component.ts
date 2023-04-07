import { Component, OnInit } from '@angular/core';
import { MovieShortInformations } from '../model/modelbundle';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  movies: MovieShortInformations[];

  constructor(private movieService: MovieService) {}

  searchMovies(title: string) {
    this.movieService
      .search(title)
      .subscribe((res: MovieShortInformations[]) => {
        this.movies = res;
      });
  }

  ngOnInit() {
    this.searchMovies('Mulholland Drive');
  }
}
