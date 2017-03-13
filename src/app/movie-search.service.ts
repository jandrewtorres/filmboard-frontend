import { Injectable } from '@angular/core';
import { MovieList } from "./MovieList";
import { OmniMovie } from "./OmniMovie"
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class MovieSearch {
    private moviesUrl = 'https://filmboard-api.herokuapp.com';

    constructor(private http: Http) { }

    search(term: string): Observable<OmniMovie[]> {
      return this.http
                 .get('https://www.omdbapi.com/?s=' + term)
                 .map(response => response.json()['Search'] as OmniMovie[])
    }
}