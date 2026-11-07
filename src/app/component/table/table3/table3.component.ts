import { Component } from '@angular/core';
import { productArr } from 'src/app/const/tableData';
import { proArr } from 'src/app/model/table';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.scss']
})
export class Table3Component {

productArr : Array<proArr> = productArr

}
