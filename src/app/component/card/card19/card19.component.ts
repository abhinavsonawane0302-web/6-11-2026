import { Component } from '@angular/core';
import { languageArr } from 'src/app/const/cardData';
import { Ilan } from 'src/app/model/card';

@Component({
  selector: 'app-card19',
  templateUrl: './card19.component.html',
  styleUrls: ['./card19.component.scss']
})
export class Card19Component {
languageArr : Array<Ilan> =languageArr
}
