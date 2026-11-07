import { Component } from '@angular/core';
import { birds, birdsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list12',
  templateUrl: './list12.component.html',
  styleUrls: ['./list12.component.scss']
})
export class List12Component {
birdsText :string  =  birdsText
birds: string[] = birds
}
