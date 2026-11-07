import { Component } from '@angular/core';
import { mathArr } from 'src/app/const/cardData';
import { Imath } from 'src/app/model/card';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component {
mathArr : Array<Imath> = mathArr
}
