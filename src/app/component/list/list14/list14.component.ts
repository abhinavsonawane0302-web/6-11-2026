import { Component } from '@angular/core';
import { festivals, festivalsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list14',
  templateUrl: './list14.component.html',
  styleUrls: ['./list14.component.scss']
})
export class List14Component {
festivalsText : string = festivalsText
festivals :string[] = festivals
}
