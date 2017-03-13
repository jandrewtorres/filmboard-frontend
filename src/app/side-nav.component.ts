import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieList } from './MovieList';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers: [ MovieService ]
})

export class SideNav {


  @Input() lists: MovieList[];

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
    if(this.listToAdd) {
      this.addListClick.emit(this.listToAdd); 
      var newList = new MovieList;
      newList.name = this.listToAdd;
      newList.movies = [];
      if(!this.lists) {
        this.lists = [];
      }
      this.lists.push(newList);
    }
  }

  onTableDelete(name: string) {
    this.movieService.deleteList(name);
    this.lists = this.lists.filter(list => list.name !== name);
  }
}