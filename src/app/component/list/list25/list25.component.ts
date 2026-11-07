import { Component } from '@angular/core';
import { weekdays, weekdaysText } from 'src/app/const/listData';

@Component({
  selector: 'app-list25',
  templateUrl: './list25.component.html',
  styleUrls: ['./list25.component.scss']
})
export class List25Component {
weekdaysText :string  = weekdaysText
weekdays : string[] = weekdays
}
