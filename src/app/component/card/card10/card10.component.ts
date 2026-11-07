import { Component } from '@angular/core';
import { cloudArr } from 'src/app/const/cardData';
import { Iclo } from 'src/app/model/card';

@Component({
  selector: 'app-card10',
  templateUrl: './card10.component.html',
  styleUrls: ['./card10.component.scss']
})
export class Card10Component {
cloudArr : Array<Iclo> = cloudArr
}
