import { Component } from '@angular/core';
import { planets, planetsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list21',
  templateUrl: './list21.component.html',
  styleUrls: ['./list21.component.scss']
})
export class List21Component {
planetsText : string = planetsText 
planets : string[] = planets
}
