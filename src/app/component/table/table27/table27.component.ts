import { Component } from '@angular/core';
import { eventArr } from 'src/app/const/tableData';
import { Ieve } from 'src/app/model/table';

@Component({
  selector: 'app-table27',
  templateUrl: './table27.component.html',
  styleUrls: ['./table27.component.scss']
})
export class Table27Component {
eventArr: Array<Ieve> = eventArr
}
