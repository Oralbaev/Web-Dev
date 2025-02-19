import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { IProduct } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() productInfo!: IProduct;
  @Output() remove = new EventEmitter;

  isLiked: boolean = true;
  LikeCount!: number;

  ngOnInit() {
    this.LikeCount = (this.productInfo.id * (this.productInfo.id + 112)) % 7;
  }

  removeItem()
  {
    this.remove.emit(this.productInfo.id)
  }

  liked()
  {
    if(this.isLiked == true)
      this.LikeCount++;
    else
      this.LikeCount--;
    this.isLiked = !this.isLiked;
  }
}
