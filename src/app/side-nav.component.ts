import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieList } from './MovieList';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'side-nav',
  template: `
    <div class="side-nav-container grey-background capitalize">
      <h3 (click)="onSelect()" class="text-center head-background">Lists</h3>
    <div class="header">
      <input [(ngModel)]="listToAdd" placeholder="New List Title"><button (click)="onAddList()"> + </button>
    </div>
      <div [class.selected]="list === currentList" class="side-nav-item" *ngFor="let list of Lists">
        <h4 (click)="onSelect(list)">{{list.name}}</h4><button class="delete" (click)="onTableDelete(list.name)"> - </button>
      </div>
    </div>
  `,
  styleUrls: ['./side-nav.component.css'],
  providers: [ MovieService ]
})

export class SideNav {


  @Input() Lists: MovieList[];

  @Output() sideNavClick: EventEmitter<MovieList> = new EventEmitter<MovieList>();
  @Output() addListClick: EventEmitter<string> = new EventEmitter<string>();
  currentList: MovieList;
  listToAdd: string;
  
  constructor(private movieService: MovieService) {}

  onSelect(list: MovieList) {
    this.currentList = list;
    this.sideNavClick.emit(this.currentList);
  }

  onAddList() {
    var isIn = 0;
    for (var i in this.Lists) {
      // code...
      if(this.Lists[i].name === this.listToAdd) {
        isIn = 1;
      }
    }
    if(!isIn){
      var newList = new MovieList;
      newList.name = this.listToAdd;
      newList.movies = [];
      this.Lists.push(newList);
      this.addListClick.emit(this.listToAdd); 
    }
  }

  onTableDelete(name: string) {
    this.movieService.deleteList(name);
    this.Lists = this.Lists.filter(list => list.name !== name);
  }
}