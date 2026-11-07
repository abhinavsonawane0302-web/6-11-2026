import { Component } from '@angular/core';
import { educationArr } from 'src/app/const/cardData';
import { Iedu } from 'src/app/model/card';

@Component({
  selector: 'app-card9',
  templateUrl: './card9.component.html',
  styleUrls: ['./card9.component.scss']
})
export class Card9Component {
educationArr : Array<Iedu> = educationArr
}
