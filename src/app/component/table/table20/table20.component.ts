import { Component } from '@angular/core';
import { gymArr } from 'src/app/const/tableData';
import { Igym } from 'src/app/model/table';

@Component({
  selector: 'app-table20',
  templateUrl: './table20.component.html',
  styleUrls: ['./table20.component.scss']
})
export class Table20Component {
gymArr : Array<Igym> = gymArr
}
