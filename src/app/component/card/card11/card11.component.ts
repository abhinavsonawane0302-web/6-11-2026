import { Component } from '@angular/core';
import { webDevArr } from 'src/app/const/cardData';
import { IWeb } from 'src/app/model/card';

@Component({
  selector: 'app-card11',
  templateUrl: './card11.component.html',
  styleUrls: ['./card11.component.scss']
})
export class Card11Component {
webDevArr : Array<IWeb> = webDevArr
}
