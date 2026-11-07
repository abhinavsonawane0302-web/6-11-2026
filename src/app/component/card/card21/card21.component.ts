import { Component } from '@angular/core';
import { environmentArr } from 'src/app/const/cardData';
import { Ienv } from 'src/app/model/card';

@Component({
  selector: 'app-card21',
  templateUrl: './card21.component.html',
  styleUrls: ['./card21.component.scss']
})
export class Card21Component {
environmentArr : Array <Ienv> =environmentArr
}
