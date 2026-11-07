import { Component } from '@angular/core';
import { vegetables, vegetablesText } from 'src/app/const/listData';

@Component({
  selector: 'app-list11',
  templateUrl: './list11.component.html',
  styleUrls: ['./list11.component.scss']
})
export class List11Component {
vegetablesText : string = vegetablesText
vegetables : string [] = vegetables
}
