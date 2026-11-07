import { Component } from '@angular/core';
import { flightArr } from 'src/app/const/tableData';
import { Ifli } from 'src/app/model/table';

@Component({
  selector: 'app-table15',
  templateUrl: './table15.component.html',
  styleUrls: ['./table15.component.scss']
})
export class Table15Component {
flightArr : Array<Ifli> = flightArr
}
