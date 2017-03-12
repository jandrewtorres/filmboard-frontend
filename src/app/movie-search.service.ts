import { Injectable } from '@angular/core';
import { MovieList } from "./MovieList";
import { Movie } from "./Movie"
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class MovieService {
    private moviesUrl = 'https://filmboard-api.herokuapp.com';

    constructor(private http: Http) { }

      search(term: string): Observable<Movie[]> {
        return this.http
                   .get('http://www.omdbapi.com/?t=' + term)
                   .map(response => response.json().Title);
      }
}