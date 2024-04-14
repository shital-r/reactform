import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
userlist:any[]=[];


getCreateuserdata(data:any){
  this.userlist.push(data);

}

delet(index:number){
  this.userlist.splice(index,1);
  

}
}
























