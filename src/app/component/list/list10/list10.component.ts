import { Component } from '@angular/core';
import { languages, languagesText } from 'src/app/const/listData';

@Component({
  selector: 'app-list10',
  templateUrl: './list10.component.html',
  styleUrls: ['./list10.component.scss']
})
export class List10Component {
languagesText : string = languagesText
languages : string [] = languages
}
 