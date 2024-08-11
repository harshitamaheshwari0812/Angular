import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input()
  prod:{title:'',discountPercentage:0,price:0,description:'',images:[''],stock:0}

  @Input()
  isDisabled:boolean
}

