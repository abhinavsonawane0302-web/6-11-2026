import { Component } from '@angular/core';
import { household, householdText } from 'src/app/const/listData';

@Component({
  selector: 'app-list30',
  templateUrl: './list30.component.html',
  styleUrls: ['./list30.component.scss']
})
export class List30Component {
householdText : string = householdText
household : string[] = household
}
