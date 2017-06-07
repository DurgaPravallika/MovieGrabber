import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.css']
})
export class SerieCardComponent {

  @Input()
  serie: Object;

}
