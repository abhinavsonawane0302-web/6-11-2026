import { Component } from '@angular/core';
import { aiArr } from 'src/app/const/cardData';
import { Iai } from 'src/app/model/card';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component {
aiArr: Array<Iai> =aiArr
}
