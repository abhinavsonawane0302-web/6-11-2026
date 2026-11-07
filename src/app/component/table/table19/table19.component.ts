import { Component } from '@angular/core';
import { memberArr } from 'src/app/const/tableData';
import { Imem } from 'src/app/model/table';

@Component({
  selector: 'app-table19',
  templateUrl: './table19.component.html',
  styleUrls: ['./table19.component.scss']
})
export class Table19Component {
memberArr : Array<Imem> = memberArr
}
