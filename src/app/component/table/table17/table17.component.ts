import { Component } from '@angular/core';
import { cityArr } from 'src/app/const/tableData';
import { Icity } from 'src/app/model/table';

@Component({
  selector: 'app-table17',
  templateUrl: './table17.component.html',
  styleUrls: ['./table17.component.scss']
})
export class Table17Component {
cityArr : Array<Icity> = cityArr
}
