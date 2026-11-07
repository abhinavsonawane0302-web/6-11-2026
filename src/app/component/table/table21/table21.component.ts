import { Component } from '@angular/core';
import { carArr } from 'src/app/const/tableData';
import { Icar } from 'src/app/model/table';

@Component({
  selector: 'app-table21',
  templateUrl: './table21.component.html',
  styleUrls: ['./table21.component.scss']
})
export class Table21Component {
carArr : Array<Icar> = carArr
}
