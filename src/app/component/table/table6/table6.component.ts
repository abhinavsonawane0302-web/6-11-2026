import { Component } from '@angular/core';
import { customerArr } from 'src/app/const/tableData';
import { Icust } from 'src/app/model/table';

@Component({
  selector: 'app-table6',
  templateUrl: './table6.component.html',
  styleUrls: ['./table6.component.scss']
})
export class Table6Component {

  customerArr : Array<Icust> = customerArr

}
