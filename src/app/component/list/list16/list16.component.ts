import { Component } from '@angular/core';
import { mobileBrands, mobileBrandsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list16',
  templateUrl: './list16.component.html',
  styleUrls: ['./list16.component.scss']
})
export class List16Component {
mobileBrandsText :string = mobileBrandsText
mobileBrands : string[] = mobileBrands
}
