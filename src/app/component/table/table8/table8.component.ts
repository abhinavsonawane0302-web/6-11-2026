import { Component } from '@angular/core';
import { movieArr } from 'src/app/const/tableData';
import { movie } from 'src/app/model/table';

@Component({
  selector: 'app-table8',
  templateUrl: './table8.component.html',
  styleUrls: ['./table8.component.scss']
})
export class Table8Component {

  movieArr : Array<movie> = movieArr

}
