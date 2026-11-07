import { Component } from '@angular/core';
import { companyArr } from 'src/app/const/tableData';
import { Icomp } from 'src/app/model/table';

@Component({
  selector: 'app-table28',
  templateUrl: './table28.component.html',
  styleUrls: ['./table28.component.scss']
})
export class Table28Component {
companyArr: Array<Icomp> = companyArr
}
