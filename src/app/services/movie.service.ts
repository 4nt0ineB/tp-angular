import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import {
  MovieFullInformations,
  MovieShortInformations,
  SearchResponse,
} from '../model/modelbundle';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apikey: string = '?apikey=cbdeb743&';
  private url: string = 'https://www.omdbapi.com/' + this.apikey;
  constructor(private http: HttpClient) {}

  search(title: string): Observable<MovieShortInformations[]> {
    return this.http
      .get<MovieShortInformations[]>(`${this.url}s=${title}`)
      .pipe(
        map((res: any) => {
          return res.Search;
        })
      );
  }

  getMovie(imdbID: string): Observable<MovieFullInformations> {
    return this.http.get<MovieFullInformations>(`${this.url}i=${imdbID}`);
  }
}
