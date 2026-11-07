import { Component } from '@angular/core';
import { vehicles, vehiclesText } from 'src/app/const/listData';


@Component({
  selector: 'app-list6',
  templateUrl: './list6.component.html',
  styleUrls: ['./list6.component.scss']
})
export class List6Component {
vehiclesText : string = vehiclesText
vehicles : string [] = vehicles
}
