import { Component } from '@angular/core';
import { studentArr } from 'src/app/const/tableData';
import { std } from 'src/app/model/table';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component {

  studentArr: Array<std> = studentArr

}
