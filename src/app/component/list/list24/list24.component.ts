import { Component } from '@angular/core';
import { gadgets, gadgetsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list24',
  templateUrl: './list24.component.html',
  styleUrls: ['./list24.component.scss']
})
export class List24Component {
gadgetsText : string = gadgetsText
gadgets : string [] = gadgets
}
