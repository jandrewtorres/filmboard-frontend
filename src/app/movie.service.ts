import { Injectable } from '@angular/core';
import { MovieList } from "./MovieList";
import { Movie } from "./Movie"
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class MovieService {
  private moviesUrl = 'https://filmboard-api.herokuapp.com';

  constructor(private http: Http) { }

  getMovieLists(): Promise<MovieList[]> {
    return this.http.get(this.moviesUrl)
      .toPromise()
      .then(response => response.json() as MovieList[])
      .catch(this.handleError)
  }

  getMovieList(name: string): Promise<Movie[]> {
    const url = `${this.moviesUrl}/${name}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Movie[])
      .catch(this.handleError);
  }

  addMovie(cat: string, name: string ): Promise<MovieList> {
    console.log(name);
  return this.http
    .post(`${this.moviesUrl}/${cat}/add/?name=${name}`, [JSON.stringify({cat: cat}), JSON.stringify({name: name})])
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }

  create(name: string): Promise<MovieList> {
    console.log(name);
  return this.http
    .post(`${this.moviesUrl}/add/${name}`, JSON.stringify({name: name}))
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
   
}
