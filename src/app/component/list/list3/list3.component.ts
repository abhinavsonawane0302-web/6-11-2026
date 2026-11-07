import { Component } from '@angular/core';
import { colors, colorsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.scss']
})
export class List3Component {
colorsText : string = colorsText
colors : string [] = colors
}
