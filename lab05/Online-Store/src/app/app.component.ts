import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categoryList = ["Phones", "Laptops", "TVs", "Tablets", 'Headphones'];
  selectedCategory: string = 'Phones';

  selectCategory(ctg: string)
  {
    this.selectedCategory = ctg;
  }
}
