import { Component } from '@angular/core';
import { instruments, instrumentsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list27',
  templateUrl: './list27.component.html',
  styleUrls: ['./list27.component.scss']
})
export class List27Component {
instrumentsText : string = instrumentsText
instruments : string[] = instruments
}
