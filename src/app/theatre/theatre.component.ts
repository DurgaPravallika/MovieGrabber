import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {
 movies: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getInTheaters().subscribe(res => {
      this.movies = res.results;
    });
  }

  ngOnInit() {
  }
  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
