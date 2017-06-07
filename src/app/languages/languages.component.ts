 import { Component, OnInit } from '@angular/core';
 import {MoviesService} from '../movies.service';


 @Component({
   selector: 'app-languages',
   templateUrl: './languages.component.html',
   styles: []
 })
 export class LanguagesComponent implements OnInit {
    movies: Array<Object>;
   searchRes: Array<Object>;
   searchStr: string;
   constructor(private _moviesService: MoviesService) {
   }

   ngOnInit() {
   }

   searchByLanguage() {
     this._moviesService.searchByLanguage(this.searchStr).subscribe(res => {
       this.searchRes = res.results;
     })
   }
 }


 
// }
