import { Component } from '@angular/core';
import { clothing, clothingText } from 'src/app/const/listData';

@Component({
  selector: 'app-list29',
  templateUrl: './list29.component.html',
  styleUrls: ['./list29.component.scss']
})
export class List29Component {
clothingText : string = clothingText
clothing : string[] = clothing
}
