import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  title: string;
  movies: Object;
  searchRes: Array<Object>;
  searchStr1: string;
  searchStr2: string;

  constructor(
    private _moviesService: MoviesService,
    private router: ActivatedRoute ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.title = params['name'];
      this._moviesService.getMoviesByGenre(id).subscribe(res => {
        this.movies = res.results;
      });
    })
  }
   searchMoviesMultiple() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
    this._moviesService.searchMoviesMultiple(id,this.searchStr1,this.searchStr2).subscribe(res => {
      this.searchRes = res.results;
    });
    })
  }

}
