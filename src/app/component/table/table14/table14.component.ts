import { Component } from '@angular/core';
import { accountArr } from 'src/app/const/tableData';
import { Iacc } from 'src/app/model/table';

@Component({
  selector: 'app-table14',
  templateUrl: './table14.component.html',
  styleUrls: ['./table14.component.scss']
})
export class Table14Component {
accountArr: Array<Iacc> = accountArr
}
