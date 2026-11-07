import { Component } from '@angular/core';
import { products, productsText } from 'src/app/const/listData';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})
export class List1Component {
  productsText : string = productsText
  products : string[]= products
}
