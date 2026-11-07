import { Component } from '@angular/core';
import { foodArr } from 'src/app/const/cardData';
import { Ifood } from 'src/app/model/card';

@Component({
  selector: 'app-card28',
  templateUrl: './card28.component.html',
  styleUrls: ['./card28.component.scss']
})
export class Card28Component {
foodArr : Array<Ifood> = foodArr
}
