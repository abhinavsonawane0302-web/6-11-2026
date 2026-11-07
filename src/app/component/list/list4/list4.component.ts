import { Component } from '@angular/core';
import { cities, citiesText } from 'src/app/const/listData';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.scss']
})
export class List4Component {
citiesText : string = citiesText
cities : string[] = cities
}
