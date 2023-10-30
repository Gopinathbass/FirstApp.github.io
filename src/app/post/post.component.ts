import { Component ,NgModule} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  name!:string;
  email!:string;
  address!:string;
  userarray:Array<any>=[];
  Ondelete(index: any) {

    this.userarray.splice(index, 1);

  }
  saveData(){
      this.userarray.push(
        {"Name":this.name,"Email":this.email,"Address":this.address});
      console.log(this.userarray);
      
  }

}
