import { Component } from '@angular/core';
import { subjects, subjectsText } from 'src/app/const/listData';
import { subjectArr } from 'src/app/const/tableData';

@Component({
  selector: 'app-list5',
  templateUrl: './list5.component.html',
  styleUrls: ['./list5.component.scss']
})
export class List5Component {
subjectsText :string = subjectsText
subjects : string [] = subjects

}
