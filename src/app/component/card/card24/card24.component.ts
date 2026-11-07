import { Component } from '@angular/core';
import { chemistryArr } from 'src/app/const/cardData';
import { Iche } from 'src/app/model/card';

@Component({
  selector: 'app-card24',
  templateUrl: './card24.component.html',
  styleUrls: ['./card24.component.scss']
})
export class Card24Component {
chemistryArr : Array<Iche> = chemistryArr
}
