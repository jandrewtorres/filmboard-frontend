import { Component, Input } from '@angular/core';
import { MovieList } from './MovieList';
import { Movie } from './Movie';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'list-view',
  templateUrl: 'list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  providers: [ MovieService ]
})

export class ListView {
  @Input() list: MovieList;
  @Input() lists: MovieList[];

  movieToPost: string;

  constructor(private movieService: MovieService) { }

  onAddMovie() {
    console.log(this.list.name);
    if(this.movieToPost && this.list.name != 'All Movies') {
      this.movieService.addMovie(this.list.name, this.movieToPost);
      var newMovie = new Movie;
      newMovie.name = this.movieToPost;
      this.list.movies.push(newMovie);
    }
  }

  onDeleteMovie(movie: Movie): void {
      this.list.movies = this.list.movies.filter(m => m !== movie);
  }

} 