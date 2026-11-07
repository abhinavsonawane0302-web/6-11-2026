import { Component } from '@angular/core';
import { mobileDevArr } from 'src/app/const/cardData';
import { Imobi } from 'src/app/model/card';

@Component({
  selector: 'app-card26',
  templateUrl: './card26.component.html',
  styleUrls: ['./card26.component.scss']
})
export class Card26Component {
mobileDevArr : Array<Imobi> = mobileDevArr
}
