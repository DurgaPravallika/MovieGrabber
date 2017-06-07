import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styles: []
})
export class YearComponent implements OnInit {
  movies: Array<Object>;
   searchRes: Array<Object>;
   searchStr: string;
   constructor(private _moviesService: MoviesService) {
   }

   ngOnInit() {
   }

   searchByYear() {
     this._moviesService.searchByYear(this.searchStr).subscribe(res => {
       this.searchRes = res.results;
     })
   }

}
