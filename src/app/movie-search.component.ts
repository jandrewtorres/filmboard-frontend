import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject }           from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { MovieSearch } from './movie-search.service';
import { OmniMovie } from './OmniMovie';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: [ './movie-search.component.css' ],
  providers: [ MovieSearch, MovieService ],
})

export class MovieSearchComponent implements OnInit {
  movies: Observable<OmniMovie[]>;
  moviesArr: OmniMovie[];
  inputVal: string;
  @Input() category: string;
  @Output() addMovieClick: EventEmitter<string> = new EventEmitter<string>();
  private searchTerms = new Subject<string>();
  
  constructor(private movieSearchService: MovieSearch, private movieService: MovieService) {
    this.moviesArr = [];
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.movies = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.movieSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<OmniMovie[]>([])
        )
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<OmniMovie[]>([]);
      });
    this.movies.subscribe(result => this.moviesArr = result);
  }

  onAddMovie() {
    if(this.inputVal && this.category != 'All Movies') {
      this.movieService.addMovie(this.category, this.inputVal);
      this.addMovieClick.emit(this.inputVal);
    }
  }

  setInput(movie: string) {
    this.inputVal = movie;
  }
}