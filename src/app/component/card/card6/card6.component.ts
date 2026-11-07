import { Component } from '@angular/core';
import { psychologyArr } from 'src/app/const/cardData';
import { Ipsy } from 'src/app/model/card';

@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.scss']
})
export class Card6Component {
psychologyArr : Array <Ipsy> = psychologyArr
}
