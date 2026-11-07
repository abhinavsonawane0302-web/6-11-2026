import { Component } from '@angular/core';
import { bookArr } from 'src/app/const/tableData';
import { Ibook } from 'src/app/model/table';

@Component({
  selector: 'app-table5',
  templateUrl: './table5.component.html',
  styleUrls: ['./table5.component.scss']
})
export class Table5Component {

  bookArr : Array<Ibook> = bookArr

}
