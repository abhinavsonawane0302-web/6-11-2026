import { Component } from '@angular/core';
import { geographyArr } from 'src/app/const/cardData';
import { Igeo } from 'src/app/model/card';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.scss']
})
export class Card5Component {
geographyArr : Array<Igeo> = geographyArr
}
