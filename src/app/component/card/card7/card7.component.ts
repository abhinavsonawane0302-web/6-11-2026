import { Component } from '@angular/core';
import { biologyArr } from 'src/app/const/cardData';
import { Ibio } from 'src/app/model/card';

@Component({
  selector: 'app-card7',
  templateUrl: './card7.component.html',
  styleUrls: ['./card7.component.scss']
})
export class Card7Component {
biologyArr : Array<Ibio>  = biologyArr
}
