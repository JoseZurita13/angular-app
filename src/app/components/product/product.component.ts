import { Component, Input } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';


import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  imports: [ 
    CommonModule,
    NgOptimizedImage
  ],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product!: Product;
  // @Input() product: Product = {
  //   id: 0,
  //   title: '',
  //   price: 0,
  //   images: ['']
  // };
}
