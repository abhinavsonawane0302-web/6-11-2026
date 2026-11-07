import { Component } from '@angular/core';
import { hospitalArr } from 'src/app/const/tableData';
import { Ihosp } from 'src/app/model/table';

@Component({
  selector: 'app-table30',
  templateUrl: './table30.component.html',
  styleUrls: ['./table30.component.scss']
})
export class Table30Component {
hospitalArr: Array <Ihosp> = hospitalArr
}
