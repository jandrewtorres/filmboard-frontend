import { Component, Input } from '@angular/core';
import { MovieList } from './MovieList';
import { Movie } from './Movie';
@Component({
  moduleId: module.id,
  selector: 'list-view',
  template: `
    <div *ngIf="List">
      <div class="header"> 
        <h3>{{List.name}}</h3>
      </div>
      <div class="table">
        <div class="row" *ngFor="let movie of List.movies">
          <h4>{{movie.name}}</h4>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./list-view.component.css'],
})

export class ListView {
  @Input() List: MovieList;
  @Input() Lists: MovieList[];
} 