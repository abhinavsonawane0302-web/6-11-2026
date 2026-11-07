import { Component } from '@angular/core';
import { techToolsArr } from 'src/app/const/cardData';
import { Itech } from 'src/app/model/card';

@Component({
  selector: 'app-card8',
  templateUrl: './card8.component.html',
  styleUrls: ['./card8.component.scss']
})
export class Card8Component {
techToolsArr : Array<Itech> = techToolsArr 
}
