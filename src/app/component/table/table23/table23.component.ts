import { Component } from '@angular/core';
import { cricketerArr } from 'src/app/const/tableData';
import { Icri } from 'src/app/model/table';

@Component({
  selector: 'app-table23',
  templateUrl: './table23.component.html',
  styleUrls: ['./table23.component.scss']
})
export class Table23Component {
cricketerArr : Array<Icri> = cricketerArr
}
