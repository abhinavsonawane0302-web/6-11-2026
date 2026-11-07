import { Component } from '@angular/core';
import { beverages, beveragesText } from 'src/app/const/listData';

@Component({
  selector: 'app-list18',
  templateUrl: './list18.component.html',
  styleUrls: ['./list18.component.scss']
})
export class List18Component {
beveragesText :string = beveragesText
beverages : string[] = beverages
}
