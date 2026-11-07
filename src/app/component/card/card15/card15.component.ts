import { Component } from '@angular/core';
import { historyArr } from 'src/app/const/cardData';
import { Ihis } from 'src/app/model/card';

@Component({
  selector: 'app-card15',
  templateUrl: './card15.component.html',
  styleUrls: ['./card15.component.scss']
})
export class Card15Component {
historyArr : Array<Ihis>  = historyArr
}
