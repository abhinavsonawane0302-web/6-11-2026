import { Component } from '@angular/core';
import { hotelArr } from 'src/app/const/tableData';
import { Ihotel } from 'src/app/model/table';

@Component({
  selector: 'app-table11',
  templateUrl: './table11.component.html',
  styleUrls: ['./table11.component.scss']
})
export class Table11Component {

  hotelArr: Array<Ihotel> = hotelArr
}
