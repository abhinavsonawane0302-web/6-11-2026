import { Component } from '@angular/core';
import { databaseArr } from 'src/app/const/cardData';
import { Idata } from 'src/app/model/card';

@Component({
  selector: 'app-card12',
  templateUrl: './card12.component.html',
  styleUrls: ['./card12.component.scss']
})
export class Card12Component {
databaseArr : Array<Idata> = databaseArr
}
