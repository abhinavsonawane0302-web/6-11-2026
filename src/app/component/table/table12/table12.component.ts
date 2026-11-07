import { Component } from '@angular/core';
import { doctorArr } from 'src/app/const/tableData';
import { Idoc } from 'src/app/model/table';

@Component({
  selector: 'app-table12',
  templateUrl: './table12.component.html',
  styleUrls: ['./table12.component.scss']
})
export class Table12Component {

doctorArr : Array<Idoc> = doctorArr

}
