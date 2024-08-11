import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponent } from './components/my-first/my-first.component';
import {HeaderComponent} from './components/header/header.component'
import { DirectivesComponent } from './components/directives/directives.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
@Component({
  selector: 'app-root',
  // selector: '.app-root',
  // selector: '[app-root]',
  standalone: true,
  imports: [RouterOutlet, MyFirstComponent, HeaderComponent, DirectivesComponent, SidebarComponent],
  templateUrl: './app.component.html',
  // template:`
  //       <h1>App Component</h1>
  //       <p>Welcome to Learn Angular</p>
  // `,
  styleUrl: './app.component.css'
  // styles:`h1{color:red}`
})
export class AppComponent {
  title:string = 'angular-basics';
  fname:string="Ram";
  lname:string="Sharma";
  gender:string='male';
  age:number=20
  imageURL:string="assets/images/a.jpg" 
  isDisabled:boolean=false
  cols:number = 4


  handleClick(event:Event):void{
    console.log(event)
    // alert("button clicked")
    this.isDisabled  = !this.isDisabled
    this.imageURL = "assets/images/b.jpg" 
  }
  
}
