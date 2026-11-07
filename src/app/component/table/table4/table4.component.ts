import { Component } from '@angular/core';
import { courseArr } from 'src/app/const/tableData';
import { Icourse } from 'src/app/model/table';

@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.scss']
})
export class Table4Component {

  courseArr : Array<Icourse> = courseArr

}
