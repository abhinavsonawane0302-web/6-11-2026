import { Component } from '@angular/core';
import { careerArr } from 'src/app/const/cardData';
import { Icareer } from 'src/app/model/card';

@Component({
  selector: 'app-card25',
  templateUrl: './card25.component.html',
  styleUrls: ['./card25.component.scss']
})
export class Card25Component {
careerArr : Array<Icareer> = careerArr
}
