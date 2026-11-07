import { Component } from '@angular/core';
import { cyberSecurityArr } from 'src/app/const/cardData';
import { Icyb } from 'src/app/model/card';

@Component({
  selector: 'app-card13',
  templateUrl: './card13.component.html',
  styleUrls: ['./card13.component.scss']
})
export class Card13Component {
cyberSecurityArr : Array<Icyb> = cyberSecurityArr
}
