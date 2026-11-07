import { Component } from '@angular/core';
import { sports, sportsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list8',
  templateUrl: './list8.component.html',
  styleUrls: ['./list8.component.scss']
})
export class List8Component {
sportsText : string = sportsText
sports : string[] = sports
}
