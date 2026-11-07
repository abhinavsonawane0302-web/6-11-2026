import { Component } from '@angular/core';
import { travelArr } from 'src/app/const/cardData';
import { Itra } from 'src/app/model/card';

@Component({
  selector: 'app-card29',
  templateUrl: './card29.component.html',
  styleUrls: ['./card29.component.scss']
})
export class Card29Component {
travelArr : Array<Itra> = travelArr
}
