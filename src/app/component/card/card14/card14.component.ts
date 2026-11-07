import { Component } from '@angular/core';
import { healthArr } from 'src/app/const/cardData';
import { Ihel } from 'src/app/model/card';

@Component({
  selector: 'app-card14',
  templateUrl: './card14.component.html',
  styleUrls: ['./card14.component.scss']
})
export class Card14Component {
healthArr : Array<Ihel> = healthArr
}
