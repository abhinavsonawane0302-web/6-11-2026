import { Component } from '@angular/core';
import { flowers, flowersText } from 'src/app/const/listData';

@Component({
  selector: 'app-list22',
  templateUrl: './list22.component.html',
  styleUrls: ['./list22.component.scss']
})
export class List22Component {
flowersText : string = flowersText
flowers : string[] = flowers 
}
