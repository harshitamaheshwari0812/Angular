import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  
  filterButton:string = 'all'
  @Input()
  all:number 
  @Input()
  beauty:number
  @Input()
  groceries:number
  @Input()
  furniture:number=2

  @Output()
  filterButtonChanged:EventEmitter<string> = new EventEmitter<string>()

  handleChange(){
    this.filterButtonChanged.emit(this.filterButton)
  }
}
