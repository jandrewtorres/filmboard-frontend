import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieList } from './MovieList';

@Component({
  moduleId: module.id,
  selector: 'side-nav',
  template: `
    <div class="side-nav-container grey-background">
    <div class="header">
      <h3 (click)="onSelect()" class="text-center head-background">Lists</h3>
      <button (click)="onAddList()"> + </button>
    </div>
      <div [class.selected]="list === currentList" class="side-nav-item" *ngFor="let list of Lists">
        <h4 (click)="onSelect(list)">{{list.name}}</h4>
      </div>
    </div>
  `,
  styleUrls: ['./side-nav.component.css'],
})

export class SideNav {


  @Input() Lists: MovieList[];

  @Output() sideNavClick: EventEmitter<MovieList> = new EventEmitter<MovieList>();
  @Output() addListClick: EventEmitter<void> = new EventEmitter<void>();
  currentList: MovieList;
  
  onSelect(list: MovieList) {
    this.currentList = list;
    this.sideNavClick.emit(this.currentList);
  }

  onAddList() {
    this.addListClick.emit();
  }
}