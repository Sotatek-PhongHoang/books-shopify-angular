import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';

const sharedComponent = [
  HeaderComponent,
  ProductListComponent,
  ProductCardComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...sharedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...sharedComponent
  ]
})
export class ComponentsModule { }
