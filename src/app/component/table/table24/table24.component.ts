import { Component } from '@angular/core';
import { subjectArr } from 'src/app/const/tableData';
import { Isub } from 'src/app/model/table';

@Component({
  selector: 'app-table24',
  templateUrl: './table24.component.html',
  styleUrls: ['./table24.component.scss']
})
export class Table24Component {
subjectArr : Array<Isub> = subjectArr
}
