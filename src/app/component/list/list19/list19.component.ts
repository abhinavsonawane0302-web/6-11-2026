import { Component } from '@angular/core';
import { dishes, dishesText } from 'src/app/const/listData';

@Component({
  selector: 'app-list19',
  templateUrl: './list19.component.html',
  styleUrls: ['./list19.component.scss']
})
export class List19Component {
dishesText : string = dishesText
dishes : string[] = dishes
}
