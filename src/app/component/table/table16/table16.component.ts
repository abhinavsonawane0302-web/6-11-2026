import { Component } from '@angular/core';
import { projectArr } from 'src/app/const/tableData';
import { Ipro } from 'src/app/model/table';

@Component({
  selector: 'app-table16',
  templateUrl: './table16.component.html',
  styleUrls: ['./table16.component.scss']
})
export class Table16Component {
projectArr: Array<Ipro> = projectArr
}
