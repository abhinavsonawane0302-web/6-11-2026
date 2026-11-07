import { Component } from '@angular/core';
import { businessArr } from 'src/app/const/cardData';
import { Ibus } from 'src/app/model/card';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.scss']
})
export class Card4Component {
businessArr : Array <Ibus> = businessArr
}
