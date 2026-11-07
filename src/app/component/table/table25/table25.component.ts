import { Component } from '@angular/core';
import { laptopArr } from 'src/app/const/tableData';
import { Ilap } from 'src/app/model/table';

@Component({
  selector: 'app-table25',
  templateUrl: './table25.component.html',
  styleUrls: ['./table25.component.scss']
})
export class Table25Component {
laptopArr: Array<Ilap> = laptopArr 

}
