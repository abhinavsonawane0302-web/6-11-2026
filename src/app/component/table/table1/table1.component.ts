import { Component } from '@angular/core';
import { empArr } from 'src/app/const/tableData';
import { Iemp } from 'src/app/model/table';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component {

 empArr:Array<Iemp> = empArr
 

}

