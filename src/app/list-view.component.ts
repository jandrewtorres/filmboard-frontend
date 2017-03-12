import { Component, Input } from '@angular/core';
import { MovieList } from './MovieList';
import { Movie } from './Movie';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'list-view',
  template: `
    <div class="contain capitalize" *ngIf="List">
      <div class="header"> 
        <h3>{{List.name}}</h3>
        <div class="subheader">
          <input [(ngModel)]="movieToPost" placeholder="New Movie Title">
          <button class="green" (click)="onAddMovie()"> + </button>
        </div>
      </div>
      <div class="table">
        <div class="row" *ngFor="let movie of List.movies; let i = index;">
          <h4>{{i}}</h4><h4>{{movie.name}}</h4> <button class="delete" (click)="onDeleteMovie(movie)"> - </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./list-view.component.css'],
  providers: [ MovieService ]
})

export class ListView {
  @Input() List: MovieList;
  @Input() Lists: MovieList[];

  movieToPost: string;

  constructor(private movieService: MovieService) { }

  onAddMovie() {
    console.log(this.List.name);
    if(this.movieToPost && this.List.name != 'All Movies') {
      this.movieService.addMovie(this.List.name, this.movieToPost);
      var newMovie = new Movie;
      newMovie.name = this.movieToPost;
      this.List.movies.push(newMovie);
    }
  }

  onDeleteMovie(movie: Movie): void {
      this.List.movies = this.List.movies.filter(m => m !== movie);
  }

} 