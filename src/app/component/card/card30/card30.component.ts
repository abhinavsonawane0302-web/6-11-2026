import { Component } from '@angular/core';
import { musicArr } from 'src/app/const/cardData';
import { Imus } from 'src/app/model/card';

@Component({
  selector: 'app-card30',
  templateUrl: './card30.component.html',
  styleUrls: ['./card30.component.scss']
})
export class Card30Component {
musicArr : Array<Imus> = musicArr
}
