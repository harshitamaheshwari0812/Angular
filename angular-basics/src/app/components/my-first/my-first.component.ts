import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-first',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.css'
})
export class MyFirstComponent {
  username:string=""
  fetchUname():void{
    alert(this.username.toUpperCase())
  }
}
