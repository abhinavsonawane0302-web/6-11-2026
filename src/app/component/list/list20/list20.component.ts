import { Component } from '@angular/core';
import { months, monthsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list20',
  templateUrl: './list20.component.html',
  styleUrls: ['./list20.component.scss']
})
export class List20Component {
monthsText : string = monthsText
months : string[] = months
}
