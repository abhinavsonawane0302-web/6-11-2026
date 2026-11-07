import { Component } from '@angular/core';
import { teacherArr } from 'src/app/const/tableData';
import { tech } from 'src/app/model/table';

@Component({
  selector: 'app-table9',
  templateUrl: './table9.component.html',
  styleUrls: ['./table9.component.scss']
})
export class Table9Component {

  teacherArr : Array<tech> = teacherArr

}
