import { Component, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsList } from '../db';
import { CommonModule } from '@angular/common';
import { IProduct } from '../models';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  ListOfProducts!: IProduct[];
  @Input() selectedCategory!: string;


  constructor(){  
    this.ListOfProducts = ProductsList;
  }

  onTaskItemRemoved(id: number)
  {
    this.ListOfProducts = this.ListOfProducts.filter(p => p.id !== id);
  }
}
