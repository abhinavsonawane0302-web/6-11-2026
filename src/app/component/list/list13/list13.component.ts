import { Component } from '@angular/core';
import { programming, programmingText } from 'src/app/const/listData';

@Component({
  selector: 'app-list13',
  templateUrl: './list13.component.html',
  styleUrls: ['./list13.component.scss']
})
export class List13Component {
programmingText : string = programmingText
programming : string[] = programming
}
