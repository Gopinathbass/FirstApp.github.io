import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  PostArray:Array<string>=['post 1','post 2','post 3','Post 4','post 5'];
  objArray:Array<any>=[
    {id:1,postTitle:'Post 1'},
  {id:2,postTitle:'Post 2'},
  {id:3,postTitle:'Post 3'},
  {id:4,postTitle:'Post 4'},
  {id:5,postTitle:'Post 5'}
];
 constructor(){
  for(let i=0;i<this.PostArray.length;i++){
    console.log(this.PostArray[i]);
    
  }
 }
}
