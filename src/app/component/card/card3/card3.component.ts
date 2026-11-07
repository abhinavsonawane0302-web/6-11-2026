import { Component } from '@angular/core';
import { roboticsArr } from 'src/app/const/cardData';
import { Irobot } from 'src/app/model/card';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component {
roboticsArr : Array <Irobot> = roboticsArr
}
