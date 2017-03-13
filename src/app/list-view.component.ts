import { Component, Input } from '@angular/core';
import { MovieList } from './MovieList';
import { Movie } from './Movie';
import { MovieService } from './movie.service';
import { MovieSearchComponent } from './movie-search.component';
import { MovieSearch } from './movie-search.service';

@Component({
  moduleId: module.id,
  selector: 'list-view',
  templateUrl: 'list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  providers: [ MovieService, MovieSearch ]
})

export class ListView {
  @Input() list: MovieList;
  @Input() lists: MovieList[];

  movieToPost: string;

  constructor(private movieService: MovieService) { }

  onDeleteMovie(movie: Movie): void {
    this.movieService.deleteMovie(movie.name, this.list.name);
    this.list.movies = this.list.movies.filter(m => m !== movie);
  }

  onAddMovie(movie: string) {
    var newMovie = new Movie;
    newMovie.name = movie;
    this.list.movies.push(newMovie);
  }

} 