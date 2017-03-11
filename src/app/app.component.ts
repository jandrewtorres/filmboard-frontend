import { Component, OnInit } from '@angular/core';
import { SideNav } from './side-nav.component';
import { MovieList } from './MovieList';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MovieService ]
})

export class AppComponent implements OnInit {
  title = 'FilmBoard';
  movieLists: MovieList[];
  currentList: MovieList;

  constructor(private movieService: MovieService) {
    this.currentList = new MovieList;
    this.movieLists = [];
  }

  ngOnInit(): void {
    this.getMovieLists();
  }

  setAllList(lists: MovieList[]): void {
    var all = new MovieList;
    all.name = 'All Movies';
    all.movies = [];
    lists.forEach(movieList => {
      movieList['movies'].forEach(movie => {
        all.movies.push(movie);
      })
    })
    this.currentList = all;
  }

  getMovieLists(): void {
    this.movieService.getMovieLists()
      .then(lists => {
        this.movieLists = lists;
        return lists;
      })
      .then(lists => {
        this.setAllList(lists);
      })
  }

  onNotify(message: MovieList):void {
    if(message) {
      this.currentList = message;
    }
    else {
      this.setAllList(this.movieLists);
    }
  }
}