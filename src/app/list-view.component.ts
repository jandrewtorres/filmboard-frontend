import { Component, Input } from '@angular/core';
import { MovieList } from './MovieList';
import { Movie } from './Movie';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'list-view',
  template: `
    <div *ngIf="List">
      <div class="header"> 
        <h3>{{List.name}}</h3>
        <div class="subheader">
          <input [(ngModel)]="movieToPost" placeholder="newList">
          <button (click)="onAddMovie()"> + </button>
        </div>
      </div>
      <div class="table">
        <div class="row" *ngFor="let movie of List.movies">
          <h4>{{movie.name}}</h4>
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
    this.movieService.addMovie(this.List.name, this.movieToPost);
    var newMovie = new Movie;
    newMovie.name = this.movieToPost;
    this.List.movies.push(newMovie);
  }
} 