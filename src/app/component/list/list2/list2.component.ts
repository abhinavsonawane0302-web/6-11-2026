import { Component } from '@angular/core';
import { fruits, fruitsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component {
fruitsText: string =fruitsText
fruits: string [] = fruits

}
