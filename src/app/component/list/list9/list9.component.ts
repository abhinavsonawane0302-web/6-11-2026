import { Component } from '@angular/core';
import { countries, countriesText } from 'src/app/const/listData';

@Component({
  selector: 'app-list9',
  templateUrl: './list9.component.html',
  styleUrls: ['./list9.component.scss']
})
export class List9Component {
countriesText : string = countriesText
countries : string[] = countries
}
