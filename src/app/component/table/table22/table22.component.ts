import { Component } from '@angular/core';
import { collegeArr } from 'src/app/const/tableData';
import { Icoll } from 'src/app/model/table';

@Component({
  selector: 'app-table22',
  templateUrl: './table22.component.html',
  styleUrls: ['./table22.component.scss']
})
export class Table22Component {
collegeArr: Array<Icoll> = collegeArr
}
