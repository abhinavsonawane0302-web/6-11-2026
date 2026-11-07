import { Component } from '@angular/core';
import { designArr } from 'src/app/const/cardData';
import { Ides } from 'src/app/model/card';

@Component({
  selector: 'app-card22',
  templateUrl: './card22.component.html',
  styleUrls: ['./card22.component.scss']
})
export class Card22Component {
designArr : Array<Ides> = designArr
}
