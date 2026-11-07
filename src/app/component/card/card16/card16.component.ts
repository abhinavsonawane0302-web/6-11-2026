import { Component } from '@angular/core';
import { spaceArr } from 'src/app/const/cardData';
import { Ispa } from 'src/app/model/card';

@Component({
  selector: 'app-card16',
  templateUrl: './card16.component.html',
  styleUrls: ['./card16.component.scss']
})
export class Card16Component {
spaceArr : Array<Ispa> = spaceArr
}
