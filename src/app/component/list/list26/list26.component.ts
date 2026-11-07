import { Component } from '@angular/core';
import { states, statesText } from 'src/app/const/listData';

@Component({
  selector: 'app-list26',
  templateUrl: './list26.component.html',
  styleUrls: ['./list26.component.scss']
})
export class List26Component {
statesText : string = statesText
states : string[] = states
}
