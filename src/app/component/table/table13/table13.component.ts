import { Component } from '@angular/core';
import { restaurantArr } from 'src/app/const/tableData';
import { Ires } from 'src/app/model/table';

@Component({
  selector: 'app-table13',
  templateUrl: './table13.component.html',
  styleUrls: ['./table13.component.scss']
})
export class Table13Component {
  restaurantArr : Array<Ires> = restaurantArr
}
