import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filterwithdropdown',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './filterwithdropdown.component.html',
  styleUrl: './filterwithdropdown.component.css',
  inputs:['categories','totalProducts'],
  outputs:['selectCategoryChange']
})
export class FilterwithdropdownComponent {
  category:string=''

  // @Output()
  selectCategoryChange:EventEmitter<string> = new EventEmitter<string>()

  changeCategory(e:any){
    console.log(e.target.value)
    this.category=e.target.value
    this.selectCategoryChange.emit(this.category)
  }

  // @Input()
  categories:string[]=[]

//  @Input()
 totalProducts:number=0

}
