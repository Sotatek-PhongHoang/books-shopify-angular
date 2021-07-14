import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Harry Potter',
      price: 12555,
      total: 1
    },
    {
      id: 2,
      name: 'Harry Potter 2',
      price: 125,
      total: 0
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1
    },
    {
      id: 1,
      name: 'Harry Potter',
      price: 125,
      total: 1,
      discount: 75
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
