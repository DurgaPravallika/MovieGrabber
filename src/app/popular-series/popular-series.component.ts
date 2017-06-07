import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css']
})
export class PopularSeriesComponent implements OnInit {
  series: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopularSeries().subscribe(res => {
      this.series = res.results;
    });
  }

  ngOnInit() {
  }
  searchSeries() {
    this._moviesService.searchSeries(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}