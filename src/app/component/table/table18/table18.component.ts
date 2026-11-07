import { Component } from '@angular/core';
import { mobileArr } from 'src/app/const/tableData';
import { Imob } from 'src/app/model/table';

@Component({
  selector: 'app-table18',
  templateUrl: './table18.component.html',
  styleUrls: ['./table18.component.scss']
})
export class Table18Component {
mobileArr : Array<Imob> = mobileArr
}
