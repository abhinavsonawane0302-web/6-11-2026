import { Component } from '@angular/core';
import { rivers, riversText } from 'src/app/const/listData';

@Component({
  selector: 'app-list15',
  templateUrl: './list15.component.html',
  styleUrls: ['./list15.component.scss']
})
export class List15Component {
riversText : string = riversText
rivers : string[] = rivers
}
