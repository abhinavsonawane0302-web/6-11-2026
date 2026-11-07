import { Component } from '@angular/core';
import { physicsArr } from 'src/app/const/cardData';
import { Iphy } from 'src/app/model/card';

@Component({
  selector: 'app-card23',
  templateUrl: './card23.component.html',
  styleUrls: ['./card23.component.scss']
})
export class Card23Component {
physicsArr : Array<Iphy> = physicsArr
}
