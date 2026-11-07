import { Component } from '@angular/core';
import { financeArr } from 'src/app/const/cardData';
import { Ifia } from 'src/app/model/card';

@Component({
  selector: 'app-card17',
  templateUrl: './card17.component.html',
  styleUrls: ['./card17.component.scss']
})
export class Card17Component {
financeArr : Array<Ifia> =financeArr
}
