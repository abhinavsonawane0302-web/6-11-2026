import { Component } from '@angular/core';
import { vehicleArr } from 'src/app/const/tableData';
import { vehi } from 'src/app/model/table';

@Component({
  selector: 'app-table10',
  templateUrl: './table10.component.html',
  styleUrls: ['./table10.component.scss']
})
export class Table10Component {

  vehicleArr : Array<vehi> = vehicleArr

}
