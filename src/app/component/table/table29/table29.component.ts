import { Component } from '@angular/core';
import { groceryArr } from 'src/app/const/tableData';
import { Igro } from 'src/app/model/table';


@Component({
  selector: 'app-table29',
  templateUrl: './table29.component.html',
  styleUrls: ['./table29.component.scss']
})
export class Table29Component {
groceryArr :Array<Igro> = groceryArr
}
