import { Component } from '@angular/core';
import { applianceArr } from 'src/app/const/tableData';
import { Iapp } from 'src/app/model/table';

@Component({
  selector: 'app-table26',
  templateUrl: './table26.component.html',
  styleUrls: ['./table26.component.scss']
})
export class Table26Component {
applianceArr : Array<Iapp> = applianceArr
}
