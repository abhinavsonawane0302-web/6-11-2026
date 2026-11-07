import { Component } from '@angular/core';
import { professions, professionsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list23',
  templateUrl: './list23.component.html',
  styleUrls: ['./list23.component.scss']
})
export class List23Component {
professionsText :string = professionsText 
professions : string[] = professions
}
