import { Component } from '@angular/core';
import { orderArr } from 'src/app/const/tableData';
import { Iorder } from 'src/app/model/table';

@Component({
  selector: 'app-table7',
  templateUrl: './table7.component.html',
  styleUrls: ['./table7.component.scss']
})
export class Table7Component {

  orderArr : Array<Iorder> = orderArr

}
