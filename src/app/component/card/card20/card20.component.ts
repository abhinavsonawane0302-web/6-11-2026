import { Component } from '@angular/core';
import { sportsArr } from 'src/app/const/cardData';
import { Ispo } from 'src/app/model/card';

@Component({
  selector: 'app-card20',
  templateUrl: './card20.component.html',
  styleUrls: ['./card20.component.scss']
})
export class Card20Component {
sportsArr : Array<Ispo> =sportsArr
}
