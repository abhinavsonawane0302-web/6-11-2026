import { Component } from '@angular/core';
import { animals, animalsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list7',
  templateUrl: './list7.component.html',
  styleUrls: ['./list7.component.scss']
})
export class List7Component {
animalsText : string = animalsText
animals : string[] = animals
}
