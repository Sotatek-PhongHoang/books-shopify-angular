import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/core/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
